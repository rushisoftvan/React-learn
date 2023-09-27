

function HeaderComonent(props){

    return (
              <div classname={"text-center"}>
                  <div className="row">
                      <div className="col-md-6">
                          <h2>Task Tracker</h2>
                      </div>
                      <div className="col-md-6 mt-1">
                          <button className="btn btn-success">Add</button>
                      </div>
                  </div>
              </div>





    );

}

HeaderComonent.defaultProps = {
    title : "Task Tracker"
}

export default HeaderComonent;

