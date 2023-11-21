"use client";

import BackToHomePage from "@/components/BackToHomePage";
import { getEventsByLinkId } from "@/lib/actions/events.actions";
import React from "react";

import { useFormStatus, useFormState } from "react-dom";

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

const EventsByPersonIdPage = () => {
  const [state, formAction] = useFormState(getEventsByLinkId, initialState);
  const { eventData } = state;

  console.log("Length of event", eventData?.length ?? 0);
  return (
    <div className="bg-slate-800 min-h-screen text-white flex flex-col space-y-5 items-center">
      {/* Back to home page */}
      <BackToHomePage />
      {/* Search box */}
      <form action={formAction} className="mt-5 flex flex-col items-center">
        <label htmlFor="search">Search event by link Id</label>
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
      <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-4 !m-10">
        {eventData ? (
          eventData.map((event, i) => (
            <div
              key={i}
              className="p-4 px-5 border flex flex-col justify-center rounded-2xl shadow-lg"
            >
              <p>{`Person:${event.person}`}</p>
              <p>{`Event type: ${event.type}`}</p>
              <p>{`Event happened in ${event.time}`}</p>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center">No event data</div>
        )}
      </div>
    </div>
  );
};

export default EventsByPersonIdPage;
