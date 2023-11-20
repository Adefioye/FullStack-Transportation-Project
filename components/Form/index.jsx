"use client";

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

const SearchForm = () => {
  const [state, formAction] = useFormState(getEventsPyPersonId, initialState);
  const { eventData } = state;

  console.log(eventData.length)

  return (
    <div>
      <form action={formAction}>
        <label htmlFor="search"></label>
        <input type="text" id="search" name="search" className="text-black" required />
        <SubmitButton />
      </form>
    </div>
  );
};

export default SearchForm;
