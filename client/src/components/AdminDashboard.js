import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteuser,
  getallclients,
  getalldoctors,
} from "../Redux/actions/user";
import { Row, Col } from "react-bootstrap";
import { deleterdv, getallrdv } from "../Redux/actions/rdv";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getalldoctors());
    dispatch(getallclients());
    dispatch(getallrdv());
  }, []);

  const Docteurs = useSelector((state) => state.userReducer.Doc);
  const Clients = useSelector((state) => state.userReducer.client);
  const rdvadmin = useSelector((state) => state.rdvReducer.result);

  return (
    <div>
      <Row>
        <Col className="my-5 mx-5">
          <table class="ui celled table">
            <thead>
              <tr>
                <th></th>
                <th>_id</th>
                <th>Is Admin ?</th>
                <th>Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Profession</th>
                <th>Specialité</th>
                <th>Ville</th>
              </tr>
            </thead>

            <tbody>
              {Docteurs
                ? Docteurs.map((el) => (
                    <tr>
                      <td
                        data-label="_id"
                        onClick={() => dispatch(deleteuser(el._id))}
                      >
                        {" "}
                        <i class="trash alternate outline icon"></i>
                      </td>

                      <td data-label="_id">{el._id}</td>
                      <td data-label="Is Admin ?">{el.isAdmin.toString()}</td>
                      <td data-label="Name">{el.name}</td>
                      <td data-label="Last Name">{el.lastName}</td>
                      <td data-label="Email">{el.email}</td>
                      <td data-label="Profession">{el.profession}</td>
                      <td data-label="Specialité">{el.specialité}</td>
                      <td data-label="Ville">{el.ville}</td>
                    </tr>
                  ))
                : "LOADING"}
            </tbody>
          </table>
        </Col>
        <Col className="my-5 mx-5">
          <table class="ui celled table">
            <thead>
              <tr>
                <th></th>
                <th>_id</th>
                <th>Is Admin ?</th>
                <th>Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Profession</th>
                <th>Ville</th>
              </tr>
            </thead>

            <tbody>
              {Clients
                ? Clients.map((el) => (
                    <tr>
                      <td
                        data-label="_id"
                        onClick={() => dispatch(deleteuser(el._id))}
                      >
                        {" "}
                        <i class="trash alternate outline icon"></i>
                      </td>
                      <td data-label="_id">{el._id}</td>
                      <td data-label="Is Admin ?">{el.isAdmin.toString()}</td>
                      <td data-label="Name">{el.name}</td>
                      <td data-label="Last Name">{el.lastName}</td>
                      <td data-label="Email">{el.email}</td>
                      <td data-label="Profession">{el.profession}</td>
                      <td data-label="Ville">{el.ville}</td>
                    </tr>
                  ))
                : "LOADING"}
            </tbody>
          </table>
        </Col>

        <Col className="my-5 mx-5">
          <table class="ui celled table">
            <thead>
              <tr>
              <th></th>
                <th>_id</th>
                <th>Client_name</th>
                <th>Client_id</th>
                <th>Doctor_name</th>
                <th>Doctor_id</th>
                <th>Date</th>
                <th>Approved ?</th>
              </tr>
            </thead>

            <tbody>
              {rdvadmin
                ? rdvadmin.map((el) => (
                    <tr>
                      <td
                        data-label="_id"
                        onClick={() => dispatch(deleterdv(el._id))}
                      >
                        {" "}
                        <i class="trash alternate outline icon"></i>
                      </td>
                      <td data-label="_id">{el._id}</td>
                      <td data-label="Is Admin ?">{el.client_name}</td>
                      <td data-label="Name">{el.client_id}</td>
                      <td data-label="Last Name">{el.doc_name}</td>
                      <td data-label="Email">{el.doc_id}</td>
                      <td data-label="Profession">{el.date}</td>
                      <td data-label="Ville">{el.approved.toString()}</td>
                    </tr>
                  ))
                : "LOADING"}
            </tbody>
          </table>
        </Col>
      </Row>
    </div>
  );
};

export default AdminDashboard;
