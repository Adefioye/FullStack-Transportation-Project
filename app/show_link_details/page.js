"use client";

import React from "react";
import Link from "next/link";

import { useFormStatus, useFormState } from "react-dom";
import BackToHomePage from "@/components/BackToHomePage";
import { getLinkDetails } from "@/lib/actions/link.actions";

const initialState = {
  searchName: null,
};

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="p-2 px-5 border text-center rounded-full"
    >
      Search
    </button>
  );
}

const ShowLinkDetailsPage = () => {
  const [state, formAction] = useFormState(getLinkDetails, initialState);
  const { linkData } = state;

  console.log(linkData);
  console.log("Length of link", linkData?.length ?? 0);
  return (
    <div className="relative bg-slate-800 min-h-screen text-white flex flex-col space-y-5 items-center">
      {/* GO BACK TO HOME PAGE BUTTON */}
      <BackToHomePage />
      {/* Search box */}
      <form action={formAction} className="mt-5 flex flex-col items-center">
        <label htmlFor="search">Retrieve link details</label>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search"
          className="text-black py-2 px-5 block placeholder:px-2 focus:outline-none rounded-md mb-5"
          required
        />
        <div>
          <SubmitButton />
        </div>
      </form>
      {/* Cards to display event information */}
      <div className="flex justify-center items-center">
        {linkData ? (
          <div className="p-10 px-20 border flex flex-col justify-center rounded-2xl shadow-lg hover:scale-110 duration-200">
            <p>{`Capacity:${linkData.capacity}`}</p>
            <p>{`Freespeed: ${linkData.freespeed}`}</p>
            <p>{`modes: ${linkData.modes}`}</p>
          </div>
        ) : (
          <div className="flex justify-center items-center">No link data</div>
        )}
      </div>
    </div>
  );
};

export default ShowLinkDetailsPage;
