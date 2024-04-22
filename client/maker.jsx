const helper = require('./helper.js');
const React = require('react');
const { useState, useEffect } = React;
const { createRoot } = require('react-dom/client');

//Was getting props validation error

const PropTypes = require('prop-types');


const handleDomo = (e, onDomoAdded) => {
    e.preventDefault();
    helper.hideError();

    const name = e.target.querySelector("#domoName").value;
    const age = e.target.querySelector("#domoAge").value;
    const species = e.target.querySelector("#domoSpecies").value;

    // Logging the values to see if they are being captured correctly
    console.log('Form values:', { name, age, species });

    if (!name || !age || !species) {
        helper.handleError('All fields are required');
        return false;
    }
    // Logging to indicate we are about to send a post request
    console.log('Sending post request for new Domo');
    helper.sendPost(e.target.action, { name, species, age }, onDomoAdded);    return false;
}
const DomoForm = (props) => {
    // console.log('DomoForm props:', props); // Log the props for DomoForm

    return (
        <form id="domoForm" onSubmit={(e) => handleDomo(e, props.triggerReload)} className="domoForm">
            <div className="inputContainer">
                <label htmlFor="name">Name:</label>
                <input id="domoName" type="text" name="name" placeholder="Domo Name" />
            </div>
            <div className="inputContainer">
                <label htmlFor="species">Species:</label>
                <input id="domoSpecies" type="text" name="species" placeholder="Domo Species" />
            </div>
            <div className="inputContainer">
                <label htmlFor="age">Age:</label>
                <input id="domoAge" type="number" min="0" name="age" />
            </div>
            <input className="makeDomoSubmit" type="submit" value="Make Domo" />
        </form>
    );
};
const DomoList = (props) => {
    console.log('DomoList props:', props); // Loging the props for DomoForm

    const [domos, setDomos] = useState(props.domos);

    const handleDelete = async (domoId) => {
        try {
          const response = await fetch('/deleteDomo', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ domoId }),
          });
          const data = await response.json();
          if (data.error) {
            console.error(data.error);
          } else {
            // Optionally remove the domo from the state to update the UI
            setDomos(prevDomos => prevDomos.filter(domo => domo._id !== domoId));
          }
        } catch (error) {
          console.error('Failed to delete Domo:', error);
        }
      };
      
    useEffect(() => {
        const loadDomosFromServer = async () => {
            const response = await fetch('/getDomos');
            const data = await response.json();
            setDomos(data.domos);
        };
        loadDomosFromServer();
    }, [props.reloadDomos]);

    if (domos.length === 0) {
        return (
            <div className="domoList">
                <h3 className="emptyDomo">No Domos Yet!</h3>
            </div>
        );
    }

    const domoNodes = domos.map(domo => {
        return (
            <div key={domo._id} className="domo">
                <img src="/assets/img/domoface.jpeg" alt="domo face" className="domoFace" />
                <h3 className="domoName">Name: {domo.name}</h3>
                <h3 className="domoSpecies">Species: {domo.species}</h3>
                <h3 className="domoAge">Age: {domo.age}</h3>
                <button onClick={() => handleDelete(domo._id)}>Delete</button>
            </div>
        );
    });

    return (
        <div className="domoList">
            {domoNodes}
        </div>
    );
};

DomoForm.propTypes = {
    triggerReload: PropTypes.func.isRequired,
};

DomoList.propTypes = {
    domos: PropTypes.array.isRequired,
    reloadDomos: PropTypes.bool.isRequired,
};



  
const App = () => {
    const [reloadDomos, setReloadDomos] = useState(false);

    return (
        <div>
            <div id="makeDomo">
                <DomoForm triggerReload={() => setReloadDomos(!reloadDomos)} />
            </div>
            <div id="domos">
                <DomoList domos={[]} reloadDomos={reloadDomos} />
            </div>
        </div>
    );
};

const init = () => {
    const root = createRoot(document.getElementById('app'));
    root.render( <App /> );
};

window.onload = init;
