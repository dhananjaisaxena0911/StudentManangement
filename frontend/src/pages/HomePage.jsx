import React from "react";
import createImg from "../assets/createHome.jpeg";
import deleteImg from "../assets/deleteHome.jpeg";
import searchImg from "../assets/searchHome.jpeg";
import updateImg from "../assets/updateHome.jpeg";
import GradientText from "../components/Bits/GradientText";

function HomePage() {
  return (
    <>
      <div className="z-2">
        <div className="flex h-[90vh] w-[100vw] justify-center align-middle ">
          <div className="h-[100%] w-[80%]  flex flex-col justify-evenly">
            <div
              className="font-bold text-white text-center text-6xl"
              style={{ fontFamily: "Pinyon Script, cursive" }}
            >
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class "
              >
                WELCOME !!
              </GradientText>
            </div>

            <div className="flex">
              <div className="p-3 m-2 shadow-[0px_-10px_15px_0px_rgba(0,0,0,0.5)] ">
                <img
                  src={createImg}
                  className="h-[50%] w-[100%] rounded-[15px]"
                  alt=""
                />
                <div className="font-medium m-6">
                  To create user functionality on a website, implement user
                  registration, login, authentication, profile management, and
                  role-based access control.
                </div>
              </div>
              <div className="p-3 m-2 shadow-[0px_-10px_15px_0px_rgba(0,0,0,0.5)] ">
                <img
                  src={deleteImg}
                  className="h-[50%] w-[100%] rounded-[15px]"
                  alt=""
                />
                <div className="font-medium m-6">
                  To delete a user, implement a function that removes the user's
                  data from the database and ensures proper authorization to
                  prevent unauthorized deletions{" "}
                </div>
              </div>
              <div className="p-3 m-2 shadow-[0px_-10px_15px_0px_rgba(0,0,0,0.5)] ">
                <img
                  src={searchImg}
                  className="h-[50%] w-[100%] rounded-[15px]"
                  alt=""
                />
                <div className="font-medium m-6">
                  To implement search functionality, create a feature that
                  allows users to query the database and display relevant
                  results based on keywords or filters.
                </div>
              </div>

              <div className="p-3 m-2 shadow-[0px_-10px_15px_0px_rgba(0,0,0,0.5)] ">
                <img
                  src={updateImg}
                  className="h-[50%] w-[100%] rounded-[15px]"
                  alt=""
                />
                <div className="font-medium m-6">
                  To update a user, implement a function that allows modifying
                  user data in the database with proper validation and
                  authorization checks.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
