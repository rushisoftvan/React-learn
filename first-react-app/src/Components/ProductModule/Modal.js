import modal from './modal.css'
function Modal(){
    return(
        <div>
            <div className="modal-container">

                <div className="modal-header">
                    <p className="close">&times;</p>
                </div>
                <div className="modal-content">
                    This is the modal
                </div>
                <div className="modal-footer">
                    <button className="btn btn-success">delete</button>
                    <button className="ms-5 btn btn-danger">Cancel</button>
                </div>
            </div>

        </div>
    );




}
export default Modal;