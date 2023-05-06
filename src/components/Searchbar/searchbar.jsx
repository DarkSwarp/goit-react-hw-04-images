import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Searchbar({ onSubmit }) {
  const [search, setSearch] = useState('');
  const handlChange = e => {
    setSearch(e.currentTarget.value);
  };

  const handlSubmit = e => {
    e.preventDefault();
    onSubmit(search);
    setSearch('');
  };

  return (
    <header className="searchbar">
      <form className="form" onSubmit={handlSubmit}>
        <button type="submit" className="button-submit">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          name="search"
          value={search}
          onChange={handlChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

// class oldSearchbar extends Component {
//   state = {
//     search: '',
//   };

//   reset() {
//     this.setState({ search: '' });
//   }
//   handlChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };
//   handlSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state.search);
//     this.reset();
//   };
//   render() {
//     return (
//       <header className="searchbar">
//         <form className="form" onSubmit={this.handlSubmit}>
//           <button type="submit" className="button-submit">
//             <span className="button-label">Search</span>
//           </button>

//           <input
//             className="input"
//             type="text"
//             name="search"
//             value={this.state.search}
//             onChange={this.handlChange}
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>
//     );
//   }
// }

Searchbar.propType = {
  onSubmit: PropTypes.func.isRequired,
};

// export default oldSearchbar;
