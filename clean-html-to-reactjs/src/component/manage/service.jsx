import React, { useState } from "react";

const Service = () => {
  return (
    <>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="search-box mb-3">
                <input
                  type="text"
                  placeholder="Tìm kiếm ..."
                  className="form-control"
                />
              </div>
            </div>

            <div className="col-2">
              <label for="trang-thai"></label>
              <select
                name="trang-thai"
                id="trang-thai"
                className="form-select mb-3"
              >
                <option value="all">Tất cả</option>
                <option value="chua-xac-nhan">gói 1</option>
                <option value="da-xac-nhan">Gói 2</option>
              </select>
            </div>
          </div>

          <section className="danh-sach-don-hang mt-3">
            <table className="table table-striped">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Tên gói dịch vụ</th>
                  <th>Bao gồm</th>
                  <th>Giá</th>
                  <th>Trạng thái</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Gói 1</td>
                  <td>
                    <li>lau nhà</li>
                    <li>quét nhà</li>
                    <li>vệ sinh nhà bếp</li>
                    <li>giặt đồ</li>
                  </td>
                  <td>2023-07-30</td>
                  <td>
                    <span className="badge bg-dark">Có sẵn</span>
                  </td>
                  <td>
                    <div className="flex align-items-center list-user-action">
                      <a
                        className="btn btn-sm btn-dark "
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Delete"
                        href="use-add.html"
                      >
                        <i className=" fa fa-light fa-trash  mr-0 "></i>
                      </a>
                      <a
                        className="btn btn-sm btn-dark "
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Edit"
                        href="use-add.html"
                      >
                        <i className=" fa fa-light fa-pen-alt  mr-0 "></i>
                      </a>
                      <a
                        className="btn btn-sm btn-dark "
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Add"
                        href="use-add.html"
                      >
                        <i className=" fa fa-light fa-plus mr-0 "></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Gói 2</td>
                  <td>2023-08-01</td>
                  <td>2023-08-15</td>
                  <td>
                    <span className="badge ">Có sẵn</span>
                  </td>
                  <td>
                    <div className="flex align-items-center list-user-action">
                      <a
                        className="btn btn-sm btn-dark "
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Delete"
                        href="use-add.html"
                      >
                        <i className=" fa fa-light fa-trash  mr-0 "></i>
                      </a>
                      <a
                        className="btn btn-sm btn-dark "
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Edit"
                        href="use-add.html"
                      >
                        <i className=" fa fa-light fa-pen-alt  mr-0 "></i>
                      </a>
                      <a
                        className="btn btn-sm btn-dark "
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Add"
                        href="use-add.html"
                      >
                        <i className=" fa fa-light fa-plus mr-0 "></i>
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </>
  );
};

export default Service;
