import incrementAction from './incrementAction'
export default function actionCreator() {
    return dispatch => {
        console.log('called action creator')
      return (
          fetch ('https://jsonplaceholder.typicode.com/users')
          .then(res=>res.json())
          .then(data=>{
              console.log(data)
              dispatch(incrementAction(data.length))
          })
      )
    };
  }