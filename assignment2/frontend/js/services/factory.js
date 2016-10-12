
angular.module('customerService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Customer', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/todos');
			},
			create : function(customerData) {
				return $http.post('/api/todos', customerData);
			},
			delete : function(id) {
				return $http.delete('/api/todos/' + id);
			}
		}
	}]);