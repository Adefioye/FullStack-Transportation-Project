"use client";

import { getEventsPyPersonId } from "@/lib/actions/events.actions";
import React from "react";

import { useFormStatus, useFormState } from "react-dom";

const initialState = {
  searchName: null,
};

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending} className="p-2 px-5 border">
      Search
    </button>
  );
}

const EventsByPersonIdPage = () => {
  const [state, formAction] = useFormState(getEventsPyPersonId, initialState);
  const { eventData } = state;

  console.log("Length of event", eventData?.length ?? 0);
  return (
    <div className="bg-slate-800 min-h-screen text-white flex flex-col space-y-5">
      {/* Search box */}
      <form action={formAction} className="">
        <label htmlFor="search">Search event by person Id</label>
        <input
          type="text"
          id="search"
          name="search"
          className="text-black block"
          required
        />
        <SubmitButton />
      </form>
      {/* Cards to display event information */}
      <div className="grid sm:grid-cols-3 md:grid-cols-4">
        {eventData ? (
          eventData.map((event, i) => (
            <div
              key={i}
              className="p-4 px-5 border flex flex-col justify-center "
            >
              <p>{`Person:${event.person}`}</p>
              <p>{`Event type: ${event.type}`}</p>
              <p>{`Event happened in ${event.time}`}</p>
            </div>
          ))
        ) : (
          <p>No event data</p>
        )}
      </div>
    </div>
  );
};

export default EventsByPersonIdPage;
