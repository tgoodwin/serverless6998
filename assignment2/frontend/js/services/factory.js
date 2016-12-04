
angular.module('customerService', [])

	.factory('Customer', ['$http',function($http) {
		return {
			create : function(customerData) {
				var config = {
	                headers : {
	                    'Content-Type': 'application/json'	               	 }
            	}
            	console.log(customerData);
				return $http.post('https://5qykueb321.execute-api.us-east-1.amazonaws.com/test/customers/' + customerData.email,  customerData, config)
					.then(function(response) {
						console.log(response);
					}, function(error) {
						console.log(error.data.message);
						alert(error.data.message);
					});
			},
			// ID is the customer's EMAIL from the email text-entry box
			read: function(id) {
				return $http.get('https://5qykueb321.execute-api.us-east-1.amazonaws.com/test/customers/' + id)
					.then(function(response) {
						var data = response.data.Item;
						document.getElementById("messageDisplay").style.display = "block";
						console.log(data.email);
						if (data.email) {

							document.getElementById("email").innerHTML = "email: " + data.email;
							document.getElementById("First").innerHTML = "firstname: " + data.firstname;
							document.getElementById("Last").innerHTML = "lastname: " + data.lastname;
							document.getElementById("Phone").innerHTML = "phone: " + data.phone_number;	
							document.getElementById("Address").innerHTML = "Address url: " + data.address.href;						
						}
						console.log(response);
					}, function(error) {
						alert(error.data.message);
					});
			},
			update : function(customerData) {
				var config = {
	                headers : {
	                    'Content-Type': 'application/json'	               	 }
            	}
				return $http.put('https://5qykueb321.execute-api.us-east-1.amazonaws.com/test/customers/' + customerData.email, customerData,config)
					.then(function(response) {
						console.log(response);
					}, function(error) {
						console.log(error.data.message);
						alert(error.data.message);
					});
			},
			delete : function(id) {
				return $http.delete('https://5qykueb321.execute-api.us-east-1.amazonaws.com/test/customers/' + id)
					.then(function(response) {
						console.log(response);
					}, function(error) {
						alert(error.data.message);
					});
			}
		}
	}]);