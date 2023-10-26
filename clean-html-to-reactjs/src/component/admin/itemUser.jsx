import React, { useState } from "react";

const ItemUser = () => {
  return (
    <>
      <tr>
        <td className="text-center">
          <img
            className="rounded img-fluid avatar-40"
            src="img/01.jpg"
            alt="profile"
          />
        </td>
        <td>An1222</td>
        <td>123456789</td>
        <td>Nguyễn Văn A </td>
        <td>nguyenvana@gmail.com </td>
        <td>Nam </td>
        <td>0909000999</td>
        <td>
          <span className="badge bg-primary">Manager</span>
        </td>
        <td>23/03/1999</td>
        <td>TP HCM</td>
        <td>
          <div className="flex align-items-center list-user-action">
            <a
              className="btn btn-sm bg-primary"
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Add"
              href="use-add.html"
            >
              <i className=" fa fa-light fa-user-plus mr-0 "></i>
            </a>
            <a
              className="btn btn-sm bg-primary"
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Edit"
              href="#"
            >
              <i className="fa fa-light fa-pen-square mr-0"></i>
            </a>
            <a
              className="btn btn-sm bg-primary"
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Delete"
              href="#"
            >
              <i className="fa fa-thin fa-trash mr-0"></i>
            </a>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ItemUser;
