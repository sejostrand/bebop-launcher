export default function Form(): JSX.Element {
  return (
    <form>
      <div>
        <label htmlFor='search-input'>Search</label>
        <input id='search-input' type='text' placeholder='Search...' />
      </div>
      <div>
        <label htmlFor='#'>Text Input Label</label>
        <input id='#' type='text' />
      </div>
      <div>
        <label htmlFor='consent' className='select-none'>
          Consent
        </label>
        <input id='consent' type='checkbox' />
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
}
