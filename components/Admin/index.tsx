import React from "react";

const Admin = () => {
  return (
    <div className="flex h-screen w-full">
      {/* ---sidebar--- */}
      <div className="fixed h-screen w-[20%] border-r border-gray-400 px-2 pt-5">
        sidebar
      </div>
      {/* ---sidebar end--- */}
      <div className="w-[20%]" />
      <div className="w-[80%] px-3 2xl:px-5 pt-5 text-xs xl:text-base 2xl:text-xl">
        <table className="w-full table-auto border-collapse ">
          <thead>
            <tr className=" bg-gray-300 text-left">
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Country</th>
              <th>Courses</th>
              <th>Approved</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((index: number) => {
              return (
                <tr key={index} className="border-t border-gray-300">
                  <td className="break-words">Alfreds Futterkiste</td>
                  <td>alfredsfutterkiste@gmail.com</td>
                  <td className="break-all">924637892012345929246378</td>
                  <td>Germany</td>
                  <td>Course 1,Course 2,Course 3</td>
                  <td className="flex justify-center">
                    <button className="btn-primary py-2 xl:py-3 2xl:py-4" disabled={false}>
                      approve
                    </button>

                    {/* <button className="btn-black-and-white">
                      approved
                    </button> */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
