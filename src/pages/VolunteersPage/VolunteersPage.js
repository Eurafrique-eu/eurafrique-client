import React, { useState } from "react";
import "./VolunteersPage.scss";
import SearchBar from "../../components/Searchbar/Searchbar";

const VolunteersPage = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [newVolunteer, setNewVolunteer] = useState({
    codeMembre: "",
    activitesCodeC1: "",
    civilite: "",
    nom: "",
    prenom: "",
    telephone: "",
    codePays: "",
    esb: "",
  });
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewVolunteer((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddVolunteer = () => {
    const newId = generateIdentifier();
    const newVolunteerWithId = { ...newVolunteer, identifiant: newId };
    setVolunteers((prevVolunteers) => [...prevVolunteers, newVolunteerWithId]);
    setNewVolunteer({
      codeMembre: "",
      activitesCodeC1: "",
      civilite: "",
      nom: "",
      prenom: "",
      telephone: "",
      codePays: "",
      esb: "",
    });
  };

  const handleRevokeVolunteer = (index) => {
    if (window.confirm("Etes-vous sûr de vouloir révoquer ce membre?")) {
      setVolunteers((prevVolunteers) =>
        prevVolunteers.map((volunteer, i) => {
          if (i === index) {
            return { ...volunteer, revoked: true };
          }
          return volunteer;
        })
      );
    }
  };

  const generateIdentifier = () => {
    const codeMembre = newVolunteer.codeMembre.toUpperCase();
    const memberNumber = (volunteers.length + 1).toString().padStart(3, "0");
    const firstNameInitial = newVolunteer.prenom.charAt(0).toUpperCase();
    const lastNameInitials = newVolunteer.nom.substring(0, 3).toUpperCase();
    return `${codeMembre}${memberNumber}${lastNameInitials}${firstNameInitial}XX`;
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const filteredVolunteers = volunteers.filter((volunteer) =>
    matchSearchTerm(volunteer, searchTerm)
  );

  const matchSearchTerm = (volunteer, term) => {
    const valuesToSearch = Object.values(volunteer).join(" ").toLowerCase();
    return valuesToSearch.includes(term.toLowerCase());
  };

  return (
    <div className="volunteers-page">
      <h2>Ajouter un bénévole</h2>
      <form>
        <div className="form-group">
          <label htmlFor="codeMembre">Code Membre</label>
          <select
            id="codeMembre"
            name="codeMembre"
            value={newVolunteer.codeMembre}
            onChange={handleInputChange}
          >
            <option value=""></option>
            <option value="MS">MS</option>
            <option value="MB">MB</option>
            <option value="MA">MA</option>
            <option value="MH">MH</option>
            <option value="MF">MF</option>
            <option value="MI">MI</option>
            <option value="MP">MP</option>
            <option value="MR">MR</option>
            <option value="MV">MV</option>
            <option value="MS">MS</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="activitesCodeC1">Activités code C1</label>
          <select
            id="activitesCodeC1"
            name="activitesCodeC1"
            value={newVolunteer.activitesCodeC1}
            onChange={handleInputChange}
          >
            <option value=""></option>
            <option value="IN">IN</option>
            <option value="GE">GE</option>
            <option value="AG">AG</option>
            <option value="EV">EV</option>
            <option value="GD">GD</option>
            <option value="BL">BL</option>
            <option value="MK">MK</option>
            <option value="EM">EM</option>
            <option value="AQ">AQ</option>
            <option value="FR">FR</option>
            <option value="DI">DI</option>
            <option value="PR">PR</option>
            <option value="AV">AV</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="civilite">Civilité</label>
          <select
            id="civilite"
            name="civilite"
            value={newVolunteer.civilite}
            onChange={handleInputChange}
          >
            <option value=""></option>
            <option value="M.">M.</option>
            <option value="Mme">Mme</option>
          </select>
        </div>
        <div className="form-group large-field">
          <label htmlFor="nom">Nom</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={newVolunteer.nom}
            onChange={handleInputChange}
            placeholder="Dupont"
          />
        </div>
        <div className="form-group large-field">
          <label htmlFor="prenom">Prénom</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={newVolunteer.prenom}
            onChange={handleInputChange}
            placeholder="Gérard"
          />
        </div>
        <div className="form-group large-field">
          <label htmlFor="telephone">Téléphone</label>
          <input
            type="text"
            id="telephone"
            name="telephone"
            value={newVolunteer.telephone}
            onChange={handleInputChange}
            placeholder="+33 123456789"
          />
        </div>
        <div className="form-group">
          <label htmlFor="codePays">Code Pays</label>
          <select
            id="codePays"
            name="codePays"
            value={newVolunteer.codePays}
            onChange={handleInputChange}
          >
            <option value=""></option>
            <option value="FR">FR</option>
            <option value="MA">MA</option>
            <option value="USA">USA</option>
            <option value="CM">CM</option>
            <option value="GM">GM</option>
            <option value="SE">SE</option>
            <option value="TU">TU</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="esb">ESB</label>
          <select id="esb" name="esb" value={newVolunteer.esb} onChange={handleInputChange}>
            <option value=""></option>
            <option value="TR">TR</option>
            <option value="ET">ET</option>
            <option value="RE">RE</option>
          </select>
        </div>
        <button type="button" onClick={handleAddVolunteer}>
          Valider
        </button>
      </form>

      <h2>Liste des bénévoles</h2>

      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />

      <table>
        <thead>
          <tr>
            <th>Code Membre</th>
            <th>Activités code C1</th>
            <th>Civilité</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Téléphone</th>
            <th>Code Pays</th>
            <th>ESB</th>
            <th>Identifiant</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredVolunteers.map((volunteer, index) => (
            <tr key={index} className={volunteer.revoked ? "revoked" : ""}>
              <td>{volunteer.codeMembre}</td>
              <td>{volunteer.activitesCodeC1}</td>
              <td>{volunteer.civilite}</td>
              <td>{volunteer.nom}</td>
              <td>{volunteer.prenom}</td>
              <td>{volunteer.telephone}</td>
              <td>{volunteer.codePays}</td>
              <td>{volunteer.esb}</td>
              <td>{volunteer.identifiant}</td>
              <td>
                {!volunteer.revoked && (
                  <button onClick={() => handleRevokeVolunteer(index)}>Révoquer</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VolunteersPage;
