import { API_ROUTES } from "../../routes/Routers"

export const foodAPI = {
  getData: () => {
    return fetch(API_ROUTES.food)
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
