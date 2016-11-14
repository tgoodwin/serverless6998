
angular.module('customerService', [])

	.factory('Customer', ['$http',function($http) {
		return {
			create : function(customerData) {
				var config = {
	                headers : {
	                    'Content-Type': 'application/json'	               	 }
            	}
				return $http.post('https://5qykueb321.execute-api.us-east-1.amazonaws.com/test/customers/' + customerData.email,  customerData, config)
					.success(function(response) {
						console.log(response);
					});
			},
			// ID is the customer's EMAIL from the email text-entry box
			read: function(id) {
				return $http.get('https://5qykueb321.execute-api.us-east-1.amazonaws.com/test/customers/' + id)
					.success(function(response) {
						console.log(response);
					});
			},
			update : function(customerData) {
				return $http.put('https://5qykueb321.execute-api.us-east-1.amazonaws.com/test/customers', customerData)
					.success(function(response) {
						console.log(response);
					});
			},
			delete : function(id) {
				return $http.delete('https://5qykueb321.execute-api.us-east-1.amazonaws.com/test/customers/' + id)
					.success(function(response) {
						console.log(response);
					});
			}
		}
	}]);