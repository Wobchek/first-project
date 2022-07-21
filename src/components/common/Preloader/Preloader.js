import preloader from "../../../assets/images/circles.svg";

let Preloader = (props) => {
    return <div style={ { background: 'grey' } }>
        <img src={preloader} />
    </div>
}

export default Preloader;