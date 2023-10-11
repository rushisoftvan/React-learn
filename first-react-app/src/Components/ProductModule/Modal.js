
 import './modalexampale.css';

function Modal(props){

    function hide(){
        console.log("hideModal");
       props.hideModal();
    }

    function modalHandaleDelete(){
        props.handleDelete();
        hide();
        console.log("handleDelete");
    }


    return(
        <>
            {
                props.show==true &&
                <div className="modalmain">
                    <div className="modalheader">
                        <p onClick={hide}>&times;</p>
                    </div>
                    <div className="modalbody">
                        <p >do you want to delete this product?</p>
                    </div>
                    <div className="modalfooter">
                        <button onClick={hide} className="btn btn-dark" type="button">
                            Close
                        </button>
                        <button onClick={modalHandaleDelete} className="btn btn-danger">Delete</button>

                    </div>

                </div>

            }

        </>

    );




}
export default Modal;