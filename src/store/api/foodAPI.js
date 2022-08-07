import { API_ROUTES } from "../../routes/Routers"

export const foodAPI = {
  getData: () => {
    return fetch(API_ROUTES.food)
  },
  getFoodDetail: (id) => {
    return fetch(`${API_ROUTES.food}/${id}`)
  },
  updateFood: (payload) => {
    const {data} = payload
    return fetch(`${API_ROUTES.food}/${payload.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  },
  deleteFood: (id) => {
    console.log(id);
    return fetch(`${API_ROUTES.food}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  addFood: (data) => {
    return fetch(API_ROUTES.food, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  },
}
