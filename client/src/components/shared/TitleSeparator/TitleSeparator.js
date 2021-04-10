import './TitleSeparator.scss';

const TitleSeparator = ({ title }) => {
    return (
        <div className="title-separator-wrapper">
            <h1>    
                {title}
            </h1>
        </div>
    );
}

export default TitleSeparator;