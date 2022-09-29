type Props = {
  query: string,
  setQuery: (value: string) => void,
  filterBy: string;
  setFilterBy: (value: string) => void
};

export const TodoFilter: React.FC<Props> = ({
  query,
  setQuery,
  filterBy,
  setFilterBy,
}) => (
  <form
    className="field has-addons"
    onSubmit={(event => event.preventDefault())}
  >
    <p className="control">
      <span className="select">
        <select
          data-cy="statusSelect"
          onChange={event => setFilterBy(event.target.value)}
          value={filterBy}
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </span>
    </p>

    <p className="control is-expanded has-icons-left has-icons-right">
      <input
        value={query}
        data-cy="searchInput"
        type="text"
        className="input"
        placeholder="Search..."
        onChange={(event) => setQuery(event.target.value)}
      />
      <span className="icon is-left">
        <i className="fas fa-magnifying-glass" />
      </span>

      {!!query.length && (
        <span className="icon is-right" style={{ pointerEvents: 'all' }}>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="clearSearchButton"
            type="button"
            className="delete"
            onClick={() => setQuery('')}
          />
        </span>
      )}
    </p>
  </form>
);
