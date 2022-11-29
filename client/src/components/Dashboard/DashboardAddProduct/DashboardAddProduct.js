import { connect } from "react-redux";
import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Notify } from "../../../contexts/Notify";
import { Spinner } from "react-bootstrap";
import { getAll as getAllCategories } from "../../../services/categoryService";
import { getAll as getAllBrands } from "../../../services/brandService";
import { create as addProduct } from "../../../services/productService";
import DashboardLayout from "../../layouts/DashboardLayout";
import "./DashboardAddProduct.scss";

const DashboardAddProduct = ({ user, products, getAllProducts }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [categoryState, setCategoryState] = useState(false);
	const [brandState, setBrandState] = useState(false);
	const { notify, setNotify } = useContext(Notify);
	const history = useHistory();

	useEffect(() => {
		getAllCategories()
			.then((res) => res.json())
			.then((categories) => {
				setCategoryState(categories);
			});
		getAllBrands()
			.then((res) => res.json())
			.then((brands) => {
				setBrandState(brands);
			});
	}, []);

	const [formData, setFormData] = useState("");

	const handleChange = (e) => {
		setFormData((currentErrState) => ({
			...currentErrState,
			[e.target.name]: e.target.value,
		}));
	};

	const submitForm = async (e) => {
		e.preventDefault();

		setIsLoading(true);

		try {
			await addProduct(formData);

			setIsLoading(false);

			history.push("/dashboard/products");

			setNotify({ type: "success", msg: "Registration successful!" });
		} catch (res) {
			setIsLoading(false);

			setNotify({ type: "error", msg: "Oops, something went wrong!" });

			console.log(res.error);
		}
	};

	return (
		<DashboardLayout>
			<section className="dashboard-add-product-wrapper">
				<h1>Add Product</h1>

				<div className="add-product-content">
					<form onSubmit={submitForm}>
						<label htmlFor="title">Title</label>

						<input
							id="title"
							name="title"
							type="text"
							onChange={handleChange}
						/>

						<label htmlFor="imageUrl">Image URL</label>

						<input
							id="imageUrl"
							name="image"
							type="text"
							onChange={handleChange}
						/>

						<label htmlFor="price">Price</label>
						<input
							id="price"
							name="price"
							type="text"
							onChange={handleChange}
						/>

						<label htmlFor="category">Category</label>
						<select id="category" name="category" onChange={handleChange}>
							<option label="Select Category" value="0">
								Select Category{" "}
							</option>

							{categoryState ? (
								categoryState.map((category, index) => (
									<option
										key={index}
										value={category._id}
										label={category.name}
									>
										{category.name}
									</option>
								))
							) : (
								<option value="Loading..." label="Loading...">
									Loading...
								</option>
							)}
						</select>

						<label htmlFor="brand">Brand</label>
						<select id="brand" name="brand" onChange={handleChange}>
							<option label="Select Brand" value="0">
								Select Brand{" "}
							</option>

							{brandState ? (
								brandState.map((brand, index) => (
									<option key={index} value={brand._id} label={brand.name}>
										{brand.name}
									</option>
								))
							) : (
								<option value="Loading..." label="Loading...">
									Loading...
								</option>
							)}
						</select>

						<label htmlFor="model">Model</label>
						<input
							id="model"
							type="text"
							name="model"
							onChange={handleChange}
						/>

						<label htmlFor="description">Description</label>
						<textarea
							id="description"
							name="description"
							onChange={handleChange}
						>
							{" "}
						</textarea>

						<label htmlFor="qtty">Stock</label>
						<input id="qtty" type="text" name="qtty" onChange={handleChange} />

						{
							<button>
								{isLoading ? (
									<div className="loader">
										<Spinner animation="border" variant="warning" />
									</div>
								) : (
									"Add"
								)}
							</button>
						}
					</form>
				</div>
			</section>
		</DashboardLayout>
	);
};

const mapStateToProps = (state) => ({
	user: state.user.user,
});

// const mapDispatchToProps = {
//     getAllProducts,
// };

export default connect(mapStateToProps, null)(DashboardAddProduct);
