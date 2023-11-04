import React, { useState } from "react";
import api from "../../config/api";
import { useRequest } from "ahooks";

const ListUser = () => {
  const { data } = useRequest(async () => {
    try {
      const response = await api.getAccountList();
      localStorage.setItem("account", JSON.stringify(response.data));
      console.log(data)
      return response.data;

    } catch (error) {
      console.error(error);

    }
  });
  return (
    <>
      <div className="content-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">Danh sách tài khoản</h4>
                  </div>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <div className="row justify-content-between">
                      <div className="col-sm-6 col-md-6">
                        <div
                          id="user_list_datatable_info"
                          className="dataTables_filter"
                        >
                          <form className="mr-3 position-relative">
                            <div className="form-group mb-0">
                              <input
                                type="search"
                                className="form-control"
                                id="exampleInputSearch"
                                placeholder="Search"
                                aria-controls="user-list-table"
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <table
                      id="user-list-table"
                      className="table table-striped dataTable mt-4"
                      role="grid"
                      aria-describedby="user-list-page-info"
                    >
                      <thead>
                        <tr className="ligth">
                          <th>Ảnh đại diện</th>
                          <th>Tên tài khoản</th>
                          <th>Email</th>
                          <th>Họ và tên</th>
                          <th>Giới tính</th>
                          <th>Số điện thoại</th>
                          <th>Vai trò</th>
                          <th>Địa chỉ</th>
                          <th style={{ minWidth: "100px" }}>Thao tác</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data ? (
                          data.map((account, index) => (
                            <tr key={index}>
                              <td><img src={account.img} alt={account.accountname} /></td>
                              <td>{account.username}</td>
                              <td>{account.email}</td>
                              <td>{account.fullName}</td>
                              <td>{account.gender}</td>
                              <td>{account.phoneNumber}</td>
                              <td>{account.role}</td>
                              <td>{account.address}</td>
                              <td style={{ minWidth: "100px" }}>
                                {/* Add your action buttons here */}
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="8">Loading...</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                  <div className="row justify-content-between mt-3">
                    <div id="user-list-page-info" className="col-md-6">
                      <span>Showing 1 to 5 of 5 entries</span>
                    </div>
                    <div className="col-md-6">
                      <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-end mb-0">
                          <li className="page-item disabled">
                            <a
                              className="page-link"
                              href="#"
                              tabindex="-1"
                              aria-disabled="true"
                            >
                              Previous
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              Next
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListUser;
