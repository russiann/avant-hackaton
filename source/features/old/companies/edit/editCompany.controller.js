class EditCompanyController {
  /* @ngInject */
  constructor ($scope, Feathers, $rootScope, $stateParams){
    this.app        = Feathers.app;
    this.$scope     = $scope;
    this.$rootScope = $rootScope;
    this.company = {
      available_at: [],
      location:     {}
    }

    this.map = {
      center: {
        latitude: -3.7469923,
        longitude: -38.50973699999997
      },
      zoom: 15,
      searchbox: {
        template: 'searchbox.tpl.html',
        parentdiv:'searchbox',
        events:{
          places_changed: (searchBox) => {
            const result = searchBox.getPlaces();
            if (!result || result.length == 0) {
              return this.SweetAlert.warning(
                'Ops',
                'Ocorreu há algum problema com esse endereço, por favor, busque novamente.'
              )
            }
            const address = result[0];
            console.log(address);
            let latitude = address.geometry.location.lat();
            let longitude = address.geometry.location.lng();

            this.company.gMapAddress = address;
            this.company.coordinates = { latitude, longitude };
            this.company.location.coordinates = [latitude, longitude];
            this.map.center          = { latitude, longitude };
          }
        }
      }
    };

    // init
    this.fetchCities().then(()=> {
      this.fetchCompany($stateParams.id);
    });
    this.fetchSupplies();
  }

  fetchCompany(id) {
    const Companies = this.app.service('companies');
    return Companies.get(id)
    .then(res => {
      this.$scope.$apply(()=>{
        this.company = res;
      })
    });
  }

  fetchSupplies() {
    const Supplies = this.app.service('supplies');
    Supplies.find()
    .then(res => {
      this.$scope.$apply(()=>{
        this.supplies = res;
      })
    });
  }

  fetchCities() {
    const Cities = this.app.service('cities');
    return Cities.find()
    .then(res => {
      this.$scope.$apply(()=>{
        this.cities = res;
      })
    });
  }

  save(company) {
    const Companies = this.app.service('companies');
    Companies.patch(company._id, company)
    .then((res) => {
      console.log(res);
      window.history.back();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  // Cities & Neighborhoods
  prepareNeighborhoods(id) {
    const city = this.cities.find((city) => {
      return city.name === id;
    })
    this.selectedNeighborhoods = null;
    this.neighborhoods = city.neighborhoods;
  }

  addNeighborhood(city, neighborhood) {
    const cityIndex = this.company.available_at.findIndex((item) => item.city === city);

    if (~cityIndex) {
      if (!~this.company.available_at[cityIndex].neighborhoods.indexOf(neighborhood)) {
        this.company.available_at[cityIndex].neighborhoods.push(neighborhood)
      }
    } else {
      this.company.available_at.push({
        city: city,
        neighborhoods: [neighborhood]
      });
    }
  }

  getCityName(id) {
    return this.cities.find((i)=> i._id === id).name;
  }

  getNeighborhoodName(cityId, neighborhoodId) {
    const city = this.cities.find((i)=> i._id === cityId);
    return city.neighborhoods.find((i)=> i._id === neighborhoodId).name;
  }

  remove(cityIndex, neighborhoodIndex) {
    this.company.available_at[cityIndex].neighborhoods.splice(neighborhoodIndex, 1);
    if (this.company.available_at[cityIndex].neighborhoods.length === 0) {
      this.company.available_at.splice(cityIndex, 1);
    }
  }

}

angular.module('app.companies.edit')
  .controller('EditCompanyController', EditCompanyController);
