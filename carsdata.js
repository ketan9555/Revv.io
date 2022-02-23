let cars = [
	{
        brand : "Hyundai",
		model : "Hyundai Elite i20",
		imgUrl : "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/i20.png",
		seats : "5",
		transmission : "Manual", 
		fuel: "Diesel", 
		segment : "Hatchback", 
		month_rent : 14000,
		rent : {
			low :  3479,
			avg :  4949,
			Unlimited : 5439,
		}
	},
	{
        brand : "Tata",
		model : "Tata Tiago (P)",
		imgUrl : "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/Tata-Tiago4.png",
		seats : "5",
		transmission : "Manual", 
		fuel: "Petrol", 
		segment : "Hatchback", 
		month_rent : 12000,
		rent : {
			low :  3479,
			avg :  4949,
			Unlimited : 5439,
		}
	},
	{
        brand : "Tata",
		model : "Tata Tiago",
		imgUrl : "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/Tata-Tiago4.png",
		seats : "5",
		transmission : "Manual", 
		fuel: "Diesel", 
		segment : "Hatchback", 
		month_rent : 13000,
		rent : {
			low :  3679,
			avg :  5149,
			Unlimited : 5999,
		}
	},
    {
        brand : "Hyundai",
		model : "Hyundai Grand i10",
		imgUrl : "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/grand_i10.png",
		seats : "5",
		transmission : "Manual",
		fuel: "Diesel",
		segment : "Hatchback",
		month_rent : 13500,
		rent : {
			low :  3381,
			avg :  4851,
			Unlimited : 5439,
		}
	},
    {
        brand : "Hyundai",
		model : "Hyundai Santro",
		imgUrl : "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/hyundai_santro.jpg",
		seats : "5",
		transmission : "Manual",
		fuel: "Diesel",
		segment : "Hatchback", 
		month_rent : 11000,
		rent : {
			low :  3479,
			avg :  4949,
			Unlimited : 5439,
		}
	},
	{
        brand : "Hyundai",
		model : "Hyundai Santro AT",
		imgUrl : "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/RevvSANTRO.png",
		seats : "5",
		transmission : "Automatic",
		fuel: "Petrol",
		segment : "Hatchback", 
		month_rent : 12000,
		rent : {
			low :  3579,
			avg :  5149,
			Unlimited : 6539,
		}
	},
	{
        brand : "Maruti",
		model : "Maruti Baleno AT",
		imgUrl : "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/baleno.png",
		seats : "5",
		transmission : "Automatic",
		fuel: "Petrol",
		segment : "Hatchback", 
		month_rent : 17000,
		rent : {
			low :  3501,
			avg :  5150,
			Unlimited : 6639,
		}
	},
	{
        brand : "Maruti",
		model : "Maruti Swift",
		imgUrl : "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/swift.png",
		seats : "5",
		transmission : "Manual",
		fuel: "Diesel",
		segment : "Hatchback", 
		month_rent : 12400,
		rent : {
			low :  3101,
			avg :  4750,
			Unlimited : 5539,
		}
	},
	{
        brand : "Maruti",
		model : "Maruti Alto K10",
		imgUrl : "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/Altok10.png",
		seats : "5",
		transmission : "Manual",
		fuel: "Petrol",
		segment : "Hatchback", 
		month_rent : 9900,
		rent : {
			low :  2101,
			avg :  3750,
			Unlimited : 4539,
		}
	},
	{
        brand : "Maruti",
		model : "Maruti Swift AT",
		imgUrl : "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/swift.png",
		seats : "5",
		transmission : "Automatic",
		fuel: "Petrol",
		segment : "Hatchback", 
		month_rent : 13400,
		rent : {
			low :  4101,
			avg :  5750,
			Unlimited : 6539,
		}
	},
	{
        brand : "Maruti",
		model : "Maruti Baleno",
		imgUrl : "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/baleno.png",
		seats : "5",
		transmission : "Manual",
		fuel: "Petrol",
		segment : "Hatchback", 
		month_rent : 15900,
		rent : {
			low :  5101,
			avg :  7750,
			Unlimited : 8539,
		}
	},
	{
        brand : "Mahindra",
		model : "Mahindra KUV100",
		imgUrl : "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/KUV-100.png",
		seats : "5",
		transmission : "Manual",
		fuel: "Diesel",
		segment : "Hatchback", 
		month_rent : 14900,
		rent : {
			low :  3901,
			avg :  5550,
			Unlimited : 6939,
		}
	},
	{
        brand : "Tata",
		model : "Tata Zest",
		imgUrl : "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/carImages/white_images/Tata-Zest.png",
		seats : "5",
		transmission : "Manual",
		fuel: "Diesel",
		segment : "Sedan", 
		month_rent : 16900,
		rent : {
			low :  5649,
			avg :  6850,
			Unlimited : 7839,
		}
	},
	{
        brand : "Tata",
		model : "Tata Tigor",
		imgUrl : "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/carImages/white_images/Tata-Tigor.png",
		seats : "5",
		transmission : "Manual",
		fuel: "Diesel",
		segment : "Sedan", 
		month_rent : 14900,
		rent : {
			low :  5201,
			avg :  6450,
			Unlimited : 7539,
		}
	},
	{
        brand : "Tata",
		model : "Tata Zest (P)",
		imgUrl : "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/carImages/white_images/Tata-Zest.png",
		seats : "5",
		transmission : "Automatic",
		fuel: "Petrol",
		segment : "Sedan", 
		month_rent : 16900,
		rent : {
			low :  5649,
			avg :  6850,
			Unlimited : 7839,
		}
	},
	{
        brand : "Tata",
		model : "Tata Tigor AT (P)",
		imgUrl : "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/carImages/white_images/Tata-Tigor.png",
		seats : "5",
		transmission : "Automatic",
		fuel: "Petrol",
		segment : "Sedan", 
		month_rent : 17900,
		rent : {
			low :  6649,
			avg :  7850,
			Unlimited : 8839,
		}
	},
	{
        brand : "Maruti",
		model : "Maruti Ciaz AT",
		imgUrl : "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/thumb/CiazWEBPAGE.png",
		seats : "5",
		transmission : "Automatic",
		fuel: "Petrol",
		segment : "Sedan", 
		month_rent : 16900,
		rent : {
			low :  6101,
			avg :  8750,
			Unlimited : 9539,
		}
	},
	{
        brand : "Maruti",
		model : "Maruti Swift Dzire",
		imgUrl : "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/dzire.png",
		seats : "5",
		transmission : "Manual",
		fuel: "Diesel",
		segment : "Sedan", 
		month_rent : 13900,
		rent : {
			low :  4201,
			avg :  5450,
			Unlimited : 6539,
		}
	},
	{
        brand : "Hyundai",
		model : "Hyundai Xcent",
		imgUrl : "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/XcentWEBPAGE.png",
		seats : "5",
		transmission : "Manual",
		fuel: "Diesel",
		segment : "Sedan", 
		month_rent : 13500,
		rent : {
			low :  4115,
			avg :  5350,
			Unlimited : 6239,
		}
	},
	{
        brand : "Maruti",
		model : "Maruti Ciaz",
		imgUrl : "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/thumb/CiazWEBPAGE.png",
		seats : "5",
		transmission : "Manual",
		fuel: "Diesel",
		segment : "Sedan", 
		month_rent : 14900,
		rent : {
			low :  5101,
			avg :  6750,
			Unlimited : 7539,
		}
	},
	{
        brand : "Hyundai",
		model : "Hyundai Verna MT",
		imgUrl : "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/RevvWebsiteVERNA+.png",
		seats : "5",
		transmission : "Manual",
		fuel: "Diesel",
		segment : "Sedan", 
		month_rent : 15500,
		rent : {
			low :  5515,
			avg :  6350,
			Unlimited : 8239,
		}
	},
	{
        brand : "Hyundai",
		model : "Hyundai Verna AT",
		imgUrl : "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/RevvWebsiteVERNA+.png",
		seats : "5",
		transmission : "Automatic",
		fuel: "Petrol",
		segment : "Sedan", 
		month_rent : 17500,
		rent : {
			low :  6515,
			avg :  7550,
			Unlimited : 9339,
		}
	},
	{
        brand : "Honda",
		model : "Honda Amaze",
		imgUrl : "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/amaze.png",
		seats : "5",
		transmission : "Manual",
		fuel: "Diesel",
		segment : "Sedan", 
		month_rent : 12500,
		rent : {
			low :  4515,
			avg :  5450,
			Unlimited : 6539,
		}
	},
    {
        brand : "Honda",
		model : "Honda City",
		imgUrl : "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/honda+city.png",
		seats : "5",
		transmission : "Manual",
		fuel: "Diesel",
		segment : "Sedan", 
		month_rent : 14500,
		rent : {
			low :  5915,
			avg :  6850,
			Unlimited : 7539,
		}
	},
	{
        brand : "Maruti",
		model : "Maruti Brezza",
		imgUrl : "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/brezza.png",
		seats : "5",
		transmission : "Manual",
		fuel: "Diesel",
		segment : "SUV", 
		month_rent : 14900,
		rent : {
			low :  5101,
			avg :  6750,
			Unlimited : 7539,
		}
	},
	{
        brand : "Hyundai",
		model : "Hyundai Creta",
		imgUrl : "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/thumb/Creta.png",
		seats : "5",
		transmission : "Manual",
		fuel: "Diesel",
		segment : "SUV", 
		month_rent : 19900,
		rent : {
			low :  6101,
			avg :  7750,
			Unlimited : 8539,
		}
	},
	{
        brand : "Maruti",
		model : "Maruti Brezza AT",
		imgUrl : "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/brezza.png",
		seats : "5",
		transmission : "Automatic",
		fuel: "Diesel",
		segment : "SUV", 
		month_rent : 17900,
		rent : {
			low :  6101,
			avg :  7150,
			Unlimited : 8039,
		}
	},
	{
        brand : "Hyundai",
		model : "Hyundai Creta AT",
		imgUrl : "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/thumb/Creta.png",
		seats : "5",
		transmission : "Automatic",
		fuel: "Diesel",
		segment : "SUV", 
		month_rent : 20900,
		rent : {
			low :  6601,
			avg :  7950,
			Unlimited : 8939,
		}
	},
	{
        brand : "Mahindra",
		model : "Mahindra XUV300 (P)",
		imgUrl : "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/carImages/white_images/RevvMahindraXUV300.png",
		seats : "5",
		transmission : "Manual",
		fuel: "Petrol",
		segment : "SUV", 
		month_rent : 15500,
		rent : {
			low :  4901,
			avg :  5830,
			Unlimited : 7449,
		}
	},
	{
        brand : "Hyundai",
		model : "Hyundai Venue AT",
		imgUrl : "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/carImages/white_images/Hyundai-Venue_For-Web.png",
		seats : "5",
		transmission : "Automatic",
		fuel: "Petrol",
		segment : "SUV", 
		month_rent : 18900,
		rent : {
			low :  5901,
			avg :  6950,
			Unlimited : 7939,
		}
	},
	{
        brand : "Mahindra",
		model : "Mahindra XUV300",
		imgUrl : "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/carImages/white_images/RevvMahindraXUV300.png",
		seats : "5",
		transmission : "Manual",
		fuel: "Diesel",
		segment : "SUV", 
		month_rent : 13500,
		rent : {
			low :  3401,
			avg :  4330,
			Unlimited : 5549,
		}
	},
    {
        brand : "Mahindra",
		model : "Mahindra Scorpio",
		imgUrl : "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/scorpio.png",
		seats : "7",
		transmission : "Manual",
		fuel: "Diesel",
		segment : "SUV", 
		month_rent : 16500,
		rent : {
			low :  5401,
			avg :  6330,
			Unlimited : 7549,
		}
	},
	{
        brand : "Mahindra",
		model : "Mahindra XUV",
		imgUrl : "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/xuv.png",
		seats : "7",
		transmission : "Manual",
		fuel: "Diesel",
		segment : "SUV", 
		month_rent : 17500,
		rent : {
			low :  6401,
			avg :  7530,
			Unlimited : 8749,
		}
	},
    {
        brand : "Toyota",
		model : "Toyota Innova Crysta",
		imgUrl : "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/InnovaWEBPAGE.png",
		seats : "7",
		transmission : "Manual",
		fuel: "Diesel",
		segment : "SUV", 
		month_rent : 26500,
		rent : {
			low :  8049,
			avg :  9049,
			Unlimited : 9999,
		}
	},
	{
        brand : "Mahindra",
		model : "Mahindra Marazzo",
		imgUrl : "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/Marazzo_white.png",
		seats : "7",
		transmission : "Manual",
		fuel: "Diesel",
		segment : "SUV", 
		month_rent : 16500,
		rent : {
			low :  5901,
			avg :  6830,
			Unlimited : 7749,
		}
	},
	{
        brand : "Maruti",
		model : "Maruti Ertiga",
		imgUrl : "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/ertiga.png",
		seats : "7",
		transmission : "Manual",
		fuel: "Diesel",
		segment : "SUV", 
		month_rent : 16149,
		rent : {
			low :  5701,
			avg :  6830,
			Unlimited : 7749,
		}
	}
	
]