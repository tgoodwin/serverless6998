
angular.module('customerService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Customer', ['$http',function($http) {
		return {
			create : function(customerData) {
				return $http.post('https://5qykueb321.execute-api.us-east-1.amazonaws.com/test/customers', customerData);
			},
			read: function(id) {
				return $http.get('https://5qykueb321.execute-api.us-east-1.amazonaws.com/test/customers/' + id);
			},
			update : function(customerData) {
				return $http.put('https://5qykueb321.execute-api.us-east-1.amazonaws.com/test/customers', customerData);
			},
			delete : function(id) {
				return $http.delete('https://5qykueb321.execute-api.us-east-1.amazonaws.com/test/customers/' + id);
			}
		}
	}]);