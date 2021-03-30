import { connect } from 'react-redux';

import MainLayout from '../layouts/MainLayout';
import SlideShow from '../shared/SlideShow';
import Products from '../Main/Products';
import './Main.scss';

const Main = ({ user }) => {

    return (
        <>
            <SlideShow />
            
            <MainLayout>
                <main className="main-wrapper">
                    <Products />
                </main>
            </MainLayout>
        </>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
});

export default connect(mapStateToProps, null)(Main);