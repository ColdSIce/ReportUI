import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data = {
    fixedColumnNames:["index", "name"],
    scrollableColumnNames:["gender", "company", "email", "phone", "address"],
    rows:[
      {
        "_id": "599c18824d1943a3f2219cc1",
        "index": 0,
        "name": "Gray Huber",
        "gender": "male",
        "company": "SEQUITUR",
        "email": "grayhuber@sequitur.com",
        "phone": "+1 (907) 495-2065",
        "address": "335 Hewes Street, Johnsonburg, Michigan, 8005"
      },
      {
        "_id": "599c18820b32f9b89550440a",
        "index": 1,
        "name": "Blanche Kim",
        "gender": "female",
        "company": "TOURMANIA",
        "email": "blanchekim@tourmania.com",
        "phone": "+1 (985) 550-3884",
        "address": "531 Seigel Court, Newry, Mississippi, 1026"
      },
      {
        "_id": "599c188266073c8284b42f52",
        "index": 2,
        "name": "Carter Sosa",
        "gender": "male",
        "company": "NURPLEX",
        "email": "cartersosa@nurplex.com",
        "phone": "+1 (959) 461-3779",
        "address": "680 Bleecker Street, Sutton, Delaware, 9208"
      },
      {
        "_id": "599c1882ccd9f9349313f707",
        "index": 3,
        "name": "Alana Castillo",
        "gender": "female",
        "company": "ICOLOGY",
        "email": "alanacastillo@icology.com",
        "phone": "+1 (812) 405-2963",
        "address": "289 Nolans Lane, Shrewsbury, Maine, 9054"
      },
      {
        "_id": "599c1882456b2e3d0561bc63",
        "index": 4,
        "name": "Gloria Curtis",
        "gender": "female",
        "company": "ROUGHIES",
        "email": "gloriacurtis@roughies.com",
        "phone": "+1 (969) 471-2418",
        "address": "977 Bedell Lane, Cascades, Montana, 5423"
      },
      {
        "_id": "599c1882e9519b2dea624079",
        "index": 5,
        "name": "Barbara Massey",
        "gender": "female",
        "company": "DEEPENDS",
        "email": "barbaramassey@deepends.com",
        "phone": "+1 (800) 472-3276",
        "address": "370 Plymouth Street, Allentown, Florida, 8058"
      },
      {
        "_id": "599c18820b695cc9951fe1f6",
        "index": 6,
        "name": "Spencer Joyner",
        "gender": "male",
        "company": "ZILODYNE",
        "email": "spencerjoyner@zilodyne.com",
        "phone": "+1 (893) 402-3965",
        "address": "947 Montauk Court, Newcastle, Arkansas, 8428"
      },
      {
        "_id": "599c1882a0ae85d0b661be3b",
        "index": 7,
        "name": "Natalia Villarreal",
        "gender": "female",
        "company": "RUBADUB",
        "email": "nataliavillarreal@rubadub.com",
        "phone": "+1 (881) 593-3020",
        "address": "409 Crawford Avenue, Cumberland, New Jersey, 5347"
      },
      {
        "_id": "599c1882bcdeea8ef4f7cdc8",
        "index": 8,
        "name": "Clarice Sexton",
        "gender": "female",
        "company": "WEBIOTIC",
        "email": "claricesexton@webiotic.com",
        "phone": "+1 (828) 420-2801",
        "address": "659 Burnett Street, Gulf, New York, 7055"
      },
      {
        "_id": "599c1882776a4c1875c6bc49",
        "index": 9,
        "name": "Hooper Sweeney",
        "gender": "male",
        "company": "BEDLAM",
        "email": "hoopersweeney@bedlam.com",
        "phone": "+1 (815) 494-3312",
        "address": "641 Glen Street, Falconaire, Ohio, 3777"
      },
      {
        "_id": "599c1882460f7817ee4a8ea2",
        "index": 10,
        "name": "Tabatha Finley",
        "gender": "female",
        "company": "VELOS",
        "email": "tabathafinley@velos.com",
        "phone": "+1 (970) 402-3767",
        "address": "136 Bergen Place, Coloma, Wyoming, 9480"
      },
      {
        "_id": "599c1882cdb03f95fd4e8219",
        "index": 11,
        "name": "Conner Case",
        "gender": "male",
        "company": "HALAP",
        "email": "connercase@halap.com",
        "phone": "+1 (825) 490-3197",
        "address": "268 Orange Street, Shasta, Northern Mariana Islands, 9693"
      },
      {
        "_id": "599c18820a818a0542c3c011",
        "index": 12,
        "name": "Cole Blevins",
        "gender": "male",
        "company": "SUPREMIA",
        "email": "coleblevins@supremia.com",
        "phone": "+1 (872) 574-3658",
        "address": "297 Chapel Street, Roy, Iowa, 5263"
      },
      {
        "_id": "599c1882362fa51aed592712",
        "index": 13,
        "name": "Marcie Howell",
        "gender": "female",
        "company": "DEVILTOE",
        "email": "marciehowell@deviltoe.com",
        "phone": "+1 (906) 415-3407",
        "address": "751 Sunnyside Court, Salix, District Of Columbia, 3998"
      },
      {
        "_id": "599c18824aeec6cf9c88d59a",
        "index": 14,
        "name": "Gilbert Morton",
        "gender": "male",
        "company": "NIQUENT",
        "email": "gilbertmorton@niquent.com",
        "phone": "+1 (813) 438-3855",
        "address": "667 Narrows Avenue, Vienna, Kentucky, 2309"
      },
      {
        "_id": "599c1882d638e15a5147dfa9",
        "index": 15,
        "name": "Kay Henson",
        "gender": "female",
        "company": "SINGAVERA",
        "email": "kayhenson@singavera.com",
        "phone": "+1 (850) 420-3394",
        "address": "994 Bergen Avenue, Murillo, Utah, 2549"
      },
      {
        "_id": "599c1882356a0b1d55e41611",
        "index": 16,
        "name": "Arlene Camacho",
        "gender": "female",
        "company": "QUARX",
        "email": "arlenecamacho@quarx.com",
        "phone": "+1 (900) 534-3844",
        "address": "621 Rock Street, Sidman, Nevada, 3259"
      },
      {
        "_id": "599c18820b32f9b89550440a",
        "index": 1,
        "name": "Blanche Kim",
        "gender": "female",
        "company": "TOURMANIA",
        "email": "blanchekim@tourmania.com",
        "phone": "+1 (985) 550-3884",
        "address": "531 Seigel Court, Newry, Mississippi, 1026"
      },
      {
        "_id": "599c188266073c8284b42f52",
        "index": 2,
        "name": "Carter Sosa",
        "gender": "male",
        "company": "NURPLEX",
        "email": "cartersosa@nurplex.com",
        "phone": "+1 (959) 461-3779",
        "address": "680 Bleecker Street, Sutton, Delaware, 9208"
      },
      {
        "_id": "599c1882ccd9f9349313f707",
        "index": 3,
        "name": "Alana Castillo",
        "gender": "female",
        "company": "ICOLOGY",
        "email": "alanacastillo@icology.com",
        "phone": "+1 (812) 405-2963",
        "address": "289 Nolans Lane, Shrewsbury, Maine, 9054"
      },
      {
        "_id": "599c1882456b2e3d0561bc63",
        "index": 4,
        "name": "Gloria Curtis",
        "gender": "female",
        "company": "ROUGHIES",
        "email": "gloriacurtis@roughies.com",
        "phone": "+1 (969) 471-2418",
        "address": "977 Bedell Lane, Cascades, Montana, 5423"
      },
      {
        "_id": "599c1882e9519b2dea624079",
        "index": 5,
        "name": "Barbara Massey",
        "gender": "female",
        "company": "DEEPENDS",
        "email": "barbaramassey@deepends.com",
        "phone": "+1 (800) 472-3276",
        "address": "370 Plymouth Street, Allentown, Florida, 8058"
      },
      {
        "_id": "599c18820b695cc9951fe1f6",
        "index": 6,
        "name": "Spencer Joyner",
        "gender": "male",
        "company": "ZILODYNE",
        "email": "spencerjoyner@zilodyne.com",
        "phone": "+1 (893) 402-3965",
        "address": "947 Montauk Court, Newcastle, Arkansas, 8428"
      },
      {
        "_id": "599c1882a0ae85d0b661be3b",
        "index": 7,
        "name": "Natalia Villarreal",
        "gender": "female",
        "company": "RUBADUB",
        "email": "nataliavillarreal@rubadub.com",
        "phone": "+1 (881) 593-3020",
        "address": "409 Crawford Avenue, Cumberland, New Jersey, 5347"
      },
      {
        "_id": "599c1882bcdeea8ef4f7cdc8",
        "index": 8,
        "name": "Clarice Sexton",
        "gender": "female",
        "company": "WEBIOTIC",
        "email": "claricesexton@webiotic.com",
        "phone": "+1 (828) 420-2801",
        "address": "659 Burnett Street, Gulf, New York, 7055"
      },
      {
        "_id": "599c1882776a4c1875c6bc49",
        "index": 9,
        "name": "Hooper Sweeney",
        "gender": "male",
        "company": "BEDLAM",
        "email": "hoopersweeney@bedlam.com",
        "phone": "+1 (815) 494-3312",
        "address": "641 Glen Street, Falconaire, Ohio, 3777"
      },
      {
        "_id": "599c1882460f7817ee4a8ea2",
        "index": 10,
        "name": "Tabatha Finley",
        "gender": "female",
        "company": "VELOS",
        "email": "tabathafinley@velos.com",
        "phone": "+1 (970) 402-3767",
        "address": "136 Bergen Place, Coloma, Wyoming, 9480"
      },
      {
        "_id": "599c1882cdb03f95fd4e8219",
        "index": 11,
        "name": "Conner Case",
        "gender": "male",
        "company": "HALAP",
        "email": "connercase@halap.com",
        "phone": "+1 (825) 490-3197",
        "address": "268 Orange Street, Shasta, Northern Mariana Islands, 9693"
      },
      {
        "_id": "599c18820a818a0542c3c011",
        "index": 12,
        "name": "Cole Blevins",
        "gender": "male",
        "company": "SUPREMIA",
        "email": "coleblevins@supremia.com",
        "phone": "+1 (872) 574-3658",
        "address": "297 Chapel Street, Roy, Iowa, 5263"
      },
      {
        "_id": "599c1882362fa51aed592712",
        "index": 13,
        "name": "Marcie Howell",
        "gender": "female",
        "company": "DEVILTOE",
        "email": "marciehowell@deviltoe.com",
        "phone": "+1 (906) 415-3407",
        "address": "751 Sunnyside Court, Salix, District Of Columbia, 3998"
      },
      {
        "_id": "599c18824aeec6cf9c88d59a",
        "index": 14,
        "name": "Gilbert Morton",
        "gender": "male",
        "company": "NIQUENT",
        "email": "gilbertmorton@niquent.com",
        "phone": "+1 (813) 438-3855",
        "address": "667 Narrows Avenue, Vienna, Kentucky, 2309"
      },
      {
        "_id": "599c1882d638e15a5147dfa9",
        "index": 15,
        "name": "Kay Henson",
        "gender": "female",
        "company": "SINGAVERA",
        "email": "kayhenson@singavera.com",
        "phone": "+1 (850) 420-3394",
        "address": "994 Bergen Avenue, Murillo, Utah, 2549"
      },
      {
        "_id": "599c1882356a0b1d55e41611",
        "index": 16,
        "name": "Arlene Camacho",
        "gender": "female",
        "company": "QUARX",
        "email": "arlenecamacho@quarx.com",
        "phone": "+1 (900) 534-3844",
        "address": "621 Rock Street, Sidman, Nevada, 3259"
      }
    ]
  }
}
