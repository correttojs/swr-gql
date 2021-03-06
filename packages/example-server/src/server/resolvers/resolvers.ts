import { Resolvers } from "./resolvers.types"


export const resolvers: Resolvers = {
  Query: {
    continents: () =>[{
      name: "Africa",
      code: "AF"
    },{
      name: "Antarctica",
      code: "AN"
    },{
      name: "Asia",
      code: "AS"
    },{
      name: "Europe",
      code: "EU"
    },{
      name: "North America",
      code: "NA"
    } ,{
      name: "Oceania",
      code: "OC"
    } ,{
      name: "South America",
      code: "SA"
    } 
  ],
  countries:()=> [{
    name: "Italy",
    phone: "+39",
    code: "IT"
  },{
    name: "Germany",
    phone: "+49",
    code: "DE"
  }]
  },
};
