import React from 'react'
import { connect } from 'react-redux';
import { INCREASE_AGE, DONATE_MONEY } from '../constants';

const Component4 = ({
  country,
  name,
  age,
  increaseAge,
  money,
  donateMoney,
}) => {
  return (
    <>
      <p> Name: {name} </p>
      <p> Country: {country} </p>
      <p> Age: {age} </p>
      <button
        type="button"
        onClick={() => {
          increaseAge();
        }}
      >
        Increase age
      </button>
      <p>{name} has £{money}</p>

      <button
        onClick={() => {
          donateMoney(100);
        }}
      >
        Donate money
      </button>
    </>
  );
};

const mapStateToProps = ({ user, bankAccount }) => {
  const { name, age } = user;
  return {
    name,
    age,
    money: bankAccount.currentAccount,
  };
};

const mapDispatchToProps = (dispatch) => ({
  increaseAge: () => dispatch({
    type: INCREASE_AGE,
  }),
  donateMoney: (amount) => dispatch({
    type: DONATE_MONEY,
    amount,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component4);
