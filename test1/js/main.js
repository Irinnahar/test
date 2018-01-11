var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.servicecatagory1=[
	    {
	    	face : './images/navlist1.png',
	        title: 'ফলাফল',
	    },
	    {
	    	face : './images/navlist2.png',
	        title: 'ফর্ম তৈরি করুন',
	    },
	    {
	    	face : './images/navlist3.png',
	        title: 'সংবাদ',
	    }
    ];
    $scope.servicecatagory2=[
	    {
	    	face : './images/list1.png',
	        title: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
	    },
	    {
	    	face : './images/list2.png',
	        title: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
	    },
	    {
	    	face : './images/list3.png',
	        title: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
	    }
    ];
    $scope.servicelist1=[
	    {
	    	service: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
	    },
	    {
	    	service: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
	    },
	    {
	    	service: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
	    },
	    {
	    	service: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
	    }
    ]
    $scope.servicelist2=[
	    {
	    	service: 'Lorem Ipsum is simply dummy text'
	    },
	    {
	    	service: 'Lorem Ipsum is simply dummy text'
	    },
	    {
	    	service: 'Lorem Ipsum is simply dummy text'
	    },
	    {
	    	service: 'Lorem Ipsum is simply dummy text'
	    }
    ];
    var imagecorrect = './images/select.png';
    var imagecancel = './images/cross.png';
    $scope.pricelist1=[
    	{
    		name: '# Accounts',
    		ratio: 'Up to 400'
    	},
    	{
    		name: 'News & Blogs',
    		img: imagecorrect
    	},
    	{
    		name: 'Blank Forms',
    		img: imagecorrect
    	},
    	{
    		name: 'Result Search',
    		img: imagecorrect
    	},
    	{
    		name: 'Import ',
    		img: imagecorrect
    	},
    	{
    		name: 'Export',
    		img: imagecorrect
    	},
    	{
    		name: 'Alert',
    		img: imagecorrect
    	}
    ];
	$scope.pricelist2=[
		{
			name: '# Accounts',
			ratio: 'Up to 100'
		},
		{
			name: 'News & Blogs',
			img: imagecorrect
		},
		{
			name: 'Blank Forms',
			img: imagecorrect
		},
		{
			name: 'Result Search',
			img: imagecorrect
		},
		{
			name: 'Import ',
			img: imagecorrect
		},
		{
			name: 'Export',
			img: imagecorrect
		},
		{
			name: 'Alert',
			img: imagecancel
		}
    ];
    $scope.pricelist3=[
		{
			name: '# Accounts',
			ratio: 'Up to 50'
		},
		{
			name: 'News & Blogs',
			img: imagecorrect
		},
		{
			name: 'Blank Forms',
			img: imagecorrect
		},
		{
			name: 'Result Search',
			img: imagecorrect
		},
		{
			name: 'Import ',
			img: imagecorrect
		},
		{
			name: 'Export',
			img: imagecancel
		},
		{
			name: 'Alert',
			img: imagecancel
		}
    ];
    $scope.pricelist4=[
		{
			name: '# Accounts',
			ratio: 'Up to 5'
		},
		{
			name: 'News & Blogs',
			img: imagecorrect
		},
		{
			name: 'Blank Forms',
			img: imagecorrect
		},
		{
			name: 'Result Search',
			img: imagecorrect
		},
		{
			name: 'Import ',
			img: imagecancel
		},
		{
			name: 'Export',
			img: imagecancel
		},
		{
			name: 'Alert',
			img: imagecancel
		}
    ];
});