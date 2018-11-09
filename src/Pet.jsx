import React from 'react';
import PropTypes from 'prop-types';

const Pet = ({ name, color }) => {
  const str = 'this is my string';
  return (
    <h2 id="my-id">
      {' '}
      {str}
      your name: {name} - color: {color} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas reiciendis
      asperiores natus blanditiis itaque explicabo nam incidunt tenetur laudantium obcaecati eaque placeat, aspernatur
      sapiente sunt tempora aut, odio expedita rem fugit eligendi illum nesciunt sint. Deserunt facere dolorem inventore
      qui non ex consectetur eligendi quisquam? Molestias aliquid corporis atque facilis, quod adipisci. Fugit
      assumenda, laborum, iusto nostrum ad debitis numquam sint maiores at esse, dolor eligendi modi cum obcaecati
      facere. Quos molestiae distinctio possimus nisi quas ipsa et quasi officia dolores iure, delectus dicta est ut
      odit quaerat enim adipisci! Necessitatibus molestiae eligendi itaque sed obcaecati animi voluptatum ipsa, tenetur
      ut beatae perspiciatis tempore incidunt non repudiandae saepe dolore sunt est. Tempore delectus fugit quae quam
      corrupti quaerat iure, expedita eaque facilis sint neque dolorem! Quidem, eius ratione. Deserunt, neque?{' '}
    </h2>
  );
};

Pet.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default Pet;
