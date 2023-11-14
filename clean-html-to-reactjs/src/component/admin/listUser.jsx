import React, { useEffect, useState } from "react";
import api from "../../config/api";
import { useRequest } from "ahooks";
import { useParams } from "react-router-dom";

const ListUser = () => {
  const page = useParams();
  const [currentPage, setCurrentPage] = useState(page || 0);
  const { data } = useRequest(async () => {
    try {
      const response = await api.getAccountList(currentPage);
      localStorage.setItem("account", JSON.stringify(response.data));

      return response.data;

    } catch (error) {
      console.error(error);

    }
  });
  useEffect(() => {
   
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    // Update the URL and current page when the user changes the page
    setCurrentPage(newPage);
  };
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
                          <th style={{ minWidth: "100px" }}></th>
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
                  <div className="row justify-content-between">
                    <div id="user-list-page-info" className="col-md-6">
                      <span>Showing 1 to {data ? data.length : 0} of {data ? data.length : 0} entries</span>
                    </div>
                    <div className="col-md-6">
                      <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-end mb-0">
                          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                            <a
                              className="page-link"
                              href="#"
                              onClick={() => handlePageChange(currentPage - 1)}
                              tabIndex="-1"
                              aria-disabled="true"
                            >
                              Previous
                            </a>
                          </li>
                          {data &&
                            data.map((_, index) => (
                              <li
                                key={index}
                                className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                              >
                                <a
                                  className="page-link"
                                  href="#"
                                  onClick={() => handlePageChange(index + 1)}
                                >
                                  {index + 1}
                                </a>
                              </li>
                            ))}
                          <li className={`page-item ${currentPage === (data ? data.length : 0) ? "disabled" : ""}`}>
                            <a
                              className="page-link"
                              href="#"
                              onClick={() => handlePageChange(currentPage + 1)}
                            >
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
