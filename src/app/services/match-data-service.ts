import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchDataService {

  getmatches = () => {
    return matches;
  }  

}

//This is from RAPID API
//Future versions will be a call to their full data 
const matches = {
  "result": [
    {
        "id": "4a86435e2cd33386",
        "date": "2022-03-04 00:00:00",
        "status": "ENDED",
        "timer": "90:00",
        "championship": {
            "id": "8a4915ec855f52ba",
            "name": "Brazil Campeonato Acreano",
            "s_name": "Campeonato Acreano 2022"
        },
        "teamA": {
            "id": "745bb0347fa00506",
            "name": "Atletico Acreano",
            "score": {
                "f": "2",
                "1h": null,
                "2h": "2",
                "o": null,
                "p": null
            },
            "stats": {
                "possession": null,
                "attacks": {
                    "n": null,
                    "d": null,
                    "o_s": null
                },
                "shoots": {
                    "t": "0",
                    "off": null,
                    "on": null,
                    "g_a": null
                },
                "penalties": null,
                "corners": {
                    "t": null,
                    "f": null,
                    "h": null
                },
                "fouls": {
                    "t": null,
                    "y_c": null,
                    "y_t_r_c": null,
                    "r_c": null
                },
                "substitutions": null,
                "throwins": null,
                "injuries": null,
                "dominance_avg_2_5": null
            },
            "manager": null
        },
        "teamB": {
            "id": "c254ca4fd0ccd9af",
            "name": "Vasco da Gama AC",
            "score": {
                "f": "1",
                "1h": null,
                "2h": "1",
                "o": null,
                "p": null
            },
            "stats": {
                "possession": null,
                "attacks": {
                    "n": null,
                    "d": null,
                    "o_s": null
                },
                "shoots": {
                    "t": "0",
                    "off": null,
                    "on": null,
                    "g_a": null
                },
                "penalties": null,
                "corners": {
                    "t": null,
                    "f": null,
                    "h": null
                },
                "fouls": {
                    "t": null,
                    "y_c": null,
                    "y_t_r_c": null,
                    "r_c": null
                },
                "substitutions": null,
                "throwins": null,
                "injuries": null,
                "dominance_avg_2_5": null
            },
            "manager": null
        },
        "events": [],
        "dominance_index": [],
        "referee": null,
        "stadium": {
            "id": "50abc1794bf2f3a4",
            "name": "Estadio Antonio Aquino Lopes"
        }
    },
    {
        "id": "5bb2da69f746b1f4",
        "date": "2022-03-04 00:30:00",
        "status": "ENDED",
        "timer": "90:00",
        "championship": {
            "id": "cd18715a2f38bc52",
            "name": "Copa do Brasil",
            "s_name": null
        },
        "teamA": {
            "id": "36a595085ea2bd7b",
            "name": "Globo FC",
            "score": {
                "f": "2",
                "1h": "0",
                "2h": "2",
                "o": null,
                "p": null
            },
            "stats": {
                "possession": "42",
                "attacks": {
                    "n": "113",
                    "d": "44",
                    "o_s": null
                },
                "shoots": {
                    "t": "9",
                    "off": "4",
                    "on": "5",
                    "g_a": null
                },
                "penalties": "0",
                "corners": {
                    "t": "2",
                    "f": "2",
                    "h": "1"
                },
                "fouls": {
                    "t": null,
                    "y_c": "3",
                    "y_t_r_c": "0",
                    "r_c": "0"
                },
                "substitutions": "2",
                "throwins": null,
                "injuries": "3",
                "dominance_avg_2_5": null
            },
            "manager": null
        },
        "teamB": {
            "id": "13e9cb3101594563",
            "name": "Internacional",
            "score": {
                "f": "0",
                "1h": "0",
                "2h": "0",
                "o": null,
                "p": null
            },
            "stats": {
                "possession": "58",
                "attacks": {
                    "n": "147",
                    "d": "73",
                    "o_s": null
                },
                "shoots": {
                    "t": "9",
                    "off": "7",
                    "on": "2",
                    "g_a": null
                },
                "penalties": "0",
                "corners": {
                    "t": "1",
                    "f": "1",
                    "h": "1"
                },
                "fouls": {
                    "t": null,
                    "y_c": "4",
                    "y_t_r_c": "0",
                    "r_c": "0"
                },
                "substitutions": "4",
                "throwins": null,
                "injuries": "1",
                "dominance_avg_2_5": null
            },
            "manager": null
        },
        "events": [
            {
                "type": "goal",
                "timer": "88",
                "team": "A"
            },
            {
                "type": "yellow_card",
                "timer": "84",
                "team": "B"
            },
            {
                "type": "yellow_card",
                "timer": "77",
                "team": "B"
            },
            {
                "type": "yellow_card",
                "timer": "74",
                "team": "B"
            },
            {
                "type": "yellow_card",
                "timer": "72",
                "team": "A"
            },
            {
                "type": "yellow_card",
                "timer": "63",
                "team": "A"
            },
            {
                "type": "corner",
                "timer": "58",
                "team": "A"
            },
            {
                "type": "goal",
                "timer": "55",
                "team": "A"
            },
            {
                "type": "yellow_card",
                "timer": "51",
                "team": "A"
            },
            {
                "type": "yellow_card",
                "timer": "37",
                "team": "B"
            },
            {
                "type": "corner",
                "timer": "10",
                "team": "A"
            },
            {
                "type": "corner",
                "timer": "7",
                "team": "B"
            }
        ],
        "dominance_index": [
            {
                "timer": "00:00",
                "teamA": "0.00",
                "teamB": "10.00"
            },
            {
                "timer": "00:30",
                "teamA": "0.00",
                "teamB": "13.00"
            },
            {
                "timer": "01:00",
                "teamA": "0.00",
                "teamB": "13.00"
            },
            {
                "timer": "01:30",
                "teamA": "0.60",
                "teamB": "16.40"
            },
            {
                "timer": "02:00",
                "teamA": "0.40",
                "teamB": "14.60"
            },
            {
                "timer": "02:30",
                "teamA": "0.30",
                "teamB": "10.70"
            },
            {
                "timer": "03:00",
                "teamA": "0.60",
                "teamB": "11.40"
            },
            {
                "timer": "03:30",
                "teamA": "2.90",
                "teamB": "8.10"
            },
            {
                "timer": "04:00",
                "teamA": "3.40",
                "teamB": "8.60"
            },
            {
                "timer": "04:30",
                "teamA": "1.90",
                "teamB": "10.10"
            },
            {
                "timer": "05:00",
                "teamA": "2.40",
                "teamB": "8.60"
            },
            {
                "timer": "05:30",
                "teamA": "4.70",
                "teamB": "8.30"
            },
            {
                "timer": "06:00",
                "teamA": "2.40",
                "teamB": "11.60"
            },
            {
                "timer": "06:30",
                "teamA": "2.30",
                "teamB": "7.70"
            },
            {
                "timer": "07:00",
                "teamA": "2.20",
                "teamB": "15.80"
            },
            {
                "timer": "07:30",
                "teamA": "9.40",
                "teamB": "7.60"
            },
            {
                "timer": "08:00",
                "teamA": "2.80",
                "teamB": "7.20"
            },
            {
                "timer": "08:30",
                "teamA": "2.70",
                "teamB": "12.30"
            },
            {
                "timer": "09:00",
                "teamA": "6.70",
                "teamB": "8.30"
            },
            {
                "timer": "09:30",
                "teamA": "2.70",
                "teamB": "7.30"
            },
            {
                "timer": "10:00",
                "teamA": "12.40",
                "teamB": "6.60"
            },
            {
                "timer": "10:30",
                "teamA": "4.50",
                "teamB": "13.50"
            },
            {
                "timer": "11:00",
                "teamA": "5.60",
                "teamB": "6.40"
            },
            {
                "timer": "11:30",
                "teamA": "5.80",
                "teamB": "6.20"
            },
            {
                "timer": "12:00",
                "teamA": "4.00",
                "teamB": "10.00"
            },
            {
                "timer": "12:30",
                "teamA": "3.80",
                "teamB": "9.20"
            },
            {
                "timer": "13:00",
                "teamA": "3.60",
                "teamB": "8.40"
            },
            {
                "timer": "13:30",
                "teamA": "3.50",
                "teamB": "9.50"
            },
            {
                "timer": "14:00",
                "teamA": "3.40",
                "teamB": "6.60"
            },
            {
                "timer": "14:30",
                "teamA": "8.60",
                "teamB": "7.40"
            },
            {
                "timer": "15:00",
                "teamA": "6.50",
                "teamB": "7.50"
            },
            {
                "timer": "15:30",
                "teamA": "3.50",
                "teamB": "11.50"
            },
            {
                "timer": "16:00",
                "teamA": "9.50",
                "teamB": "6.50"
            },
            {
                "timer": "16:30",
                "teamA": "4.60",
                "teamB": "6.40"
            },
            {
                "timer": "17:00",
                "teamA": "3.50",
                "teamB": "7.50"
            },
            {
                "timer": "17:30",
                "teamA": "3.40",
                "teamB": "6.60"
            },
            {
                "timer": "18:00",
                "teamA": "3.40",
                "teamB": "19.60"
            },
            {
                "timer": "18:30",
                "teamA": "3.40",
                "teamB": "9.60"
            },
            {
                "timer": "19:00",
                "teamA": "11.40",
                "teamB": "6.60"
            },
            {
                "timer": "19:30",
                "teamA": "6.70",
                "teamB": "6.30"
            },
            {
                "timer": "20:00",
                "teamA": "3.60",
                "teamB": "12.40"
            },
            {
                "timer": "20:30",
                "teamA": "3.60",
                "teamB": "17.40"
            },
            {
                "timer": "21:00",
                "teamA": "3.40",
                "teamB": "6.60"
            },
            {
                "timer": "21:30",
                "teamA": "4.60",
                "teamB": "6.40"
            },
            {
                "timer": "22:00",
                "teamA": "4.70",
                "teamB": "6.30"
            },
            {
                "timer": "22:30",
                "teamA": "4.60",
                "teamB": "7.40"
            },
            {
                "timer": "23:00",
                "teamA": "6.60",
                "teamB": "9.40"
            },
            {
                "timer": "23:30",
                "teamA": "4.80",
                "teamB": "6.20"
            },
            {
                "timer": "24:00",
                "teamA": "4.70",
                "teamB": "7.30"
            },
            {
                "timer": "24:30",
                "teamA": "3.70",
                "teamB": "9.30"
            },
            {
                "timer": "25:00",
                "teamA": "8.70",
                "teamB": "6.30"
            },
            {
                "timer": "25:30",
                "teamA": "8.70",
                "teamB": "6.30"
            },
            {
                "timer": "26:00",
                "teamA": "5.90",
                "teamB": "6.10"
            },
            {
                "timer": "26:30",
                "teamA": "6.10",
                "teamB": "5.90"
            },
            {
                "timer": "27:00",
                "teamA": "6.10",
                "teamB": "6.90"
            },
            {
                "timer": "27:30",
                "teamA": "4.00",
                "teamB": "9.00"
            },
            {
                "timer": "28:00",
                "teamA": "10.00",
                "teamB": "6.00"
            },
            {
                "timer": "28:30",
                "teamA": "7.10",
                "teamB": "9.90"
            },
            {
                "timer": "29:00",
                "teamA": "4.00",
                "teamB": "6.00"
            },
            {
                "timer": "29:30",
                "teamA": "5.00",
                "teamB": "7.00"
            },
            {
                "timer": "30:00",
                "teamA": "4.90",
                "teamB": "7.10"
            },
            {
                "timer": "30:30",
                "teamA": "5.00",
                "teamB": "6.00"
            },
            {
                "timer": "31:00",
                "teamA": "7.00",
                "teamB": "6.00"
            },
            {
                "timer": "31:30",
                "teamA": "4.00",
                "teamB": "10.00"
            },
            {
                "timer": "32:00",
                "teamA": "3.90",
                "teamB": "10.10"
            },
            {
                "timer": "32:30",
                "teamA": "3.90",
                "teamB": "11.10"
            },
            {
                "timer": "33:00",
                "teamA": "3.80",
                "teamB": "11.20"
            },
            {
                "timer": "33:30",
                "teamA": "4.80",
                "teamB": "10.20"
            },
            {
                "timer": "34:00",
                "teamA": "3.70",
                "teamB": "6.30"
            },
            {
                "timer": "34:30",
                "teamA": "3.70",
                "teamB": "6.30"
            },
            {
                "timer": "35:00",
                "teamA": "3.70",
                "teamB": "6.30"
            },
            {
                "timer": "35:30",
                "teamA": "3.70",
                "teamB": "6.30"
            },
            {
                "timer": "36:00",
                "teamA": "3.70",
                "teamB": "9.30"
            },
            {
                "timer": "36:30",
                "teamA": "4.70",
                "teamB": "7.30"
            },
            {
                "timer": "37:00",
                "teamA": "6.70",
                "teamB": "6.30"
            },
            {
                "timer": "37:30",
                "teamA": "6.80",
                "teamB": "7.20"
            },
            {
                "timer": "38:00",
                "teamA": "5.90",
                "teamB": "10.10"
            },
            {
                "timer": "38:30",
                "teamA": "3.90",
                "teamB": "6.10"
            },
            {
                "timer": "39:00",
                "teamA": "3.90",
                "teamB": "14.10"
            },
            {
                "timer": "39:30",
                "teamA": "4.00",
                "teamB": "7.00"
            },
            {
                "timer": "40:00",
                "teamA": "8.00",
                "teamB": "13.00"
            },
            {
                "timer": "40:30",
                "teamA": "3.90",
                "teamB": "7.10"
            },
            {
                "timer": "41:00",
                "teamA": "3.90",
                "teamB": "6.10"
            },
            {
                "timer": "41:30",
                "teamA": "3.90",
                "teamB": "13.10"
            },
            {
                "timer": "42:00",
                "teamA": "3.80",
                "teamB": "10.20"
            },
            {
                "timer": "42:30",
                "teamA": "6.80",
                "teamB": "10.20"
            },
            {
                "timer": "43:00",
                "teamA": "3.80",
                "teamB": "8.20"
            },
            {
                "timer": "43:30",
                "teamA": "3.70",
                "teamB": "13.30"
            },
            {
                "timer": "44:00",
                "teamA": "3.70",
                "teamB": "13.30"
            },
            {
                "timer": "44:30",
                "teamA": "3.70",
                "teamB": "6.30"
            },
            {
                "timer": "45:00",
                "teamA": "8.70",
                "teamB": "6.30"
            },
            {
                "timer": "45:00+00:00",
                "teamA": "3.70",
                "teamB": "10.30"
            },
            {
                "timer": "45:00+00:30",
                "teamA": "3.70",
                "teamB": "7.30"
            },
            {
                "timer": "45:00+01:00",
                "teamA": "3.70",
                "teamB": "9.30"
            },
            {
                "timer": "45:00+01:30",
                "teamA": "3.70",
                "teamB": "9.30"
            },
            {
                "timer": "45:30",
                "teamA": "5.70",
                "teamB": "8.30"
            },
            {
                "timer": "46:00",
                "teamA": "5.70",
                "teamB": "7.30"
            },
            {
                "timer": "46:30",
                "teamA": "3.70",
                "teamB": "6.30"
            },
            {
                "timer": "47:00",
                "teamA": "9.70",
                "teamB": "6.30"
            },
            {
                "timer": "47:30",
                "teamA": "3.70",
                "teamB": "8.30"
            },
            {
                "timer": "48:00",
                "teamA": "5.70",
                "teamB": "7.30"
            },
            {
                "timer": "48:30",
                "teamA": "7.80",
                "teamB": "6.20"
            },
            {
                "timer": "49:00",
                "teamA": "3.70",
                "teamB": "7.30"
            },
            {
                "timer": "49:30",
                "teamA": "3.70",
                "teamB": "9.30"
            },
            {
                "timer": "50:00",
                "teamA": "3.60",
                "teamB": "6.40"
            },
            {
                "timer": "50:30",
                "teamA": "3.60",
                "teamB": "6.40"
            },
            {
                "timer": "51:00",
                "teamA": "3.60",
                "teamB": "6.40"
            },
            {
                "timer": "51:30",
                "teamA": "4.60",
                "teamB": "7.40"
            },
            {
                "timer": "52:00",
                "teamA": "7.70",
                "teamB": "6.30"
            },
            {
                "timer": "52:30",
                "teamA": "4.70",
                "teamB": "7.30"
            },
            {
                "timer": "53:00",
                "teamA": "7.80",
                "teamB": "12.20"
            },
            {
                "timer": "53:30",
                "teamA": "3.80",
                "teamB": "6.20"
            },
            {
                "timer": "54:00",
                "teamA": "3.80",
                "teamB": "6.20"
            },
            {
                "timer": "54:30",
                "teamA": "16.80",
                "teamB": "6.20"
            },
            {
                "timer": "55:00",
                "teamA": "3.80",
                "teamB": "6.20"
            },
            {
                "timer": "55:30",
                "teamA": "3.80",
                "teamB": "7.20"
            },
            {
                "timer": "56:00",
                "teamA": "3.70",
                "teamB": "10.30"
            },
            {
                "timer": "56:30",
                "teamA": "5.80",
                "teamB": "6.20"
            },
            {
                "timer": "57:00",
                "teamA": "8.80",
                "teamB": "6.20"
            },
            {
                "timer": "57:30",
                "teamA": "5.90",
                "teamB": "6.10"
            },
            {
                "timer": "58:00",
                "teamA": "7.90",
                "teamB": "6.10"
            },
            {
                "timer": "58:30",
                "teamA": "4.00",
                "teamB": "6.00"
            },
            {
                "timer": "59:00",
                "teamA": "4.00",
                "teamB": "6.00"
            },
            {
                "timer": "59:30",
                "teamA": "3.90",
                "teamB": "11.10"
            },
            {
                "timer": "60:00",
                "teamA": "3.90",
                "teamB": "6.10"
            },
            {
                "timer": "60:30",
                "teamA": "3.80",
                "teamB": "7.20"
            },
            {
                "timer": "61:00",
                "teamA": "6.90",
                "teamB": "6.10"
            },
            {
                "timer": "61:30",
                "teamA": "4.90",
                "teamB": "6.10"
            },
            {
                "timer": "62:00",
                "teamA": "3.90",
                "teamB": "6.10"
            },
            {
                "timer": "62:30",
                "teamA": "4.00",
                "teamB": "6.00"
            },
            {
                "timer": "63:00",
                "teamA": "11.10",
                "teamB": "5.90"
            },
            {
                "timer": "63:30",
                "teamA": "4.10",
                "teamB": "5.90"
            },
            {
                "timer": "64:00",
                "teamA": "4.20",
                "teamB": "5.80"
            },
            {
                "timer": "64:30",
                "teamA": "4.20",
                "teamB": "5.80"
            },
            {
                "timer": "65:00",
                "teamA": "4.20",
                "teamB": "5.80"
            },
            {
                "timer": "65:30",
                "teamA": "5.20",
                "teamB": "5.80"
            },
            {
                "timer": "66:00",
                "teamA": "20.10",
                "teamB": "5.90"
            },
            {
                "timer": "66:30",
                "teamA": "5.20",
                "teamB": "5.80"
            },
            {
                "timer": "67:00",
                "teamA": "7.20",
                "teamB": "5.80"
            },
            {
                "timer": "67:30",
                "teamA": "4.20",
                "teamB": "7.80"
            },
            {
                "timer": "68:00",
                "teamA": "5.20",
                "teamB": "12.80"
            },
            {
                "timer": "68:30",
                "teamA": "5.10",
                "teamB": "13.90"
            },
            {
                "timer": "69:00",
                "teamA": "5.10",
                "teamB": "8.90"
            },
            {
                "timer": "69:30",
                "teamA": "8.10",
                "teamB": "5.90"
            },
            {
                "timer": "70:00",
                "teamA": "5.10",
                "teamB": "6.90"
            },
            {
                "timer": "70:30",
                "teamA": "5.10",
                "teamB": "6.90"
            },
            {
                "timer": "71:00",
                "teamA": "9.10",
                "teamB": "5.90"
            },
            {
                "timer": "71:30",
                "teamA": "8.20",
                "teamB": "5.80"
            },
            {
                "timer": "72:00",
                "teamA": "4.20",
                "teamB": "9.80"
            },
            {
                "timer": "72:30",
                "teamA": "6.20",
                "teamB": "5.80"
            },
            {
                "timer": "73:00",
                "teamA": "5.20",
                "teamB": "5.80"
            },
            {
                "timer": "73:30",
                "teamA": "6.20",
                "teamB": "7.80"
            },
            {
                "timer": "74:00",
                "teamA": "4.20",
                "teamB": "6.80"
            },
            {
                "timer": "74:30",
                "teamA": "4.20",
                "teamB": "5.80"
            },
            {
                "timer": "75:00",
                "teamA": "9.20",
                "teamB": "6.80"
            },
            {
                "timer": "75:30",
                "teamA": "5.20",
                "teamB": "6.80"
            },
            {
                "timer": "76:00",
                "teamA": "7.20",
                "teamB": "5.80"
            },
            {
                "timer": "76:30",
                "teamA": "4.30",
                "teamB": "5.70"
            },
            {
                "timer": "77:00",
                "teamA": "10.30",
                "teamB": "5.70"
            },
            {
                "timer": "77:30",
                "teamA": "5.30",
                "teamB": "9.70"
            },
            {
                "timer": "78:00",
                "teamA": "4.20",
                "teamB": "5.80"
            },
            {
                "timer": "78:30",
                "teamA": "4.20",
                "teamB": "6.80"
            },
            {
                "timer": "79:00",
                "teamA": "5.20",
                "teamB": "6.80"
            },
            {
                "timer": "79:30",
                "teamA": "4.20",
                "teamB": "9.80"
            },
            {
                "timer": "80:00",
                "teamA": "4.20",
                "teamB": "13.80"
            },
            {
                "timer": "80:30",
                "teamA": "4.20",
                "teamB": "5.80"
            },
            {
                "timer": "81:00",
                "teamA": "4.20",
                "teamB": "13.80"
            },
            {
                "timer": "81:30",
                "teamA": "5.20",
                "teamB": "5.80"
            },
            {
                "timer": "82:00",
                "teamA": "5.20",
                "teamB": "10.80"
            },
            {
                "timer": "82:30",
                "teamA": "5.20",
                "teamB": "6.80"
            },
            {
                "timer": "83:00",
                "teamA": "4.20",
                "teamB": "8.80"
            },
            {
                "timer": "83:30",
                "teamA": "5.10",
                "teamB": "5.90"
            },
            {
                "timer": "84:00",
                "teamA": "8.20",
                "teamB": "5.80"
            },
            {
                "timer": "84:30",
                "teamA": "9.20",
                "teamB": "5.80"
            },
            {
                "timer": "85:00",
                "teamA": "4.30",
                "teamB": "5.70"
            },
            {
                "timer": "85:30",
                "teamA": "5.20",
                "teamB": "6.80"
            },
            {
                "timer": "86:00",
                "teamA": "8.20",
                "teamB": "10.80"
            },
            {
                "timer": "86:30",
                "teamA": "4.30",
                "teamB": "14.70"
            },
            {
                "timer": "87:00",
                "teamA": "4.20",
                "teamB": "8.80"
            },
            {
                "timer": "87:30",
                "teamA": "17.20",
                "teamB": "8.80"
            },
            {
                "timer": "88:00",
                "teamA": "4.20",
                "teamB": "5.80"
            },
            {
                "timer": "88:30",
                "teamA": "4.20",
                "teamB": "5.80"
            },
            {
                "timer": "89:00",
                "teamA": "4.20",
                "teamB": "10.80"
            },
            {
                "timer": "89:30",
                "teamA": "9.20",
                "teamB": "5.80"
            },
            {
                "timer": "90:00",
                "teamA": "",
                "teamB": ""
            },
            {
                "timer": "90:00+00:00",
                "teamA": "4.30",
                "teamB": "5.70"
            },
            {
                "timer": "90:00+00:30",
                "teamA": "5.30",
                "teamB": "6.70"
            },
            {
                "timer": "90:00+01:00",
                "teamA": "4.30",
                "teamB": "8.70"
            },
            {
                "timer": "90:00+01:30",
                "teamA": "8.30",
                "teamB": "9.70"
            },
            {
                "timer": "90:00+02:00",
                "teamA": "5.30",
                "teamB": "5.70"
            },
            {
                "timer": "90:00+02:30",
                "teamA": "4.30",
                "teamB": "13.70"
            },
            {
                "timer": "90:00+03:00",
                "teamA": "5.20",
                "teamB": "6.80"
            },
            {
                "timer": "90:00+03:30",
                "teamA": "4.20",
                "teamB": "10.80"
            },
            {
                "timer": "90:00+04:00",
                "teamA": "5.20",
                "teamB": "5.80"
            },
            {
                "timer": "90:00+04:30",
                "teamA": "5.20",
                "teamB": "17.80"
            },
            {
                "timer": "90:00+05:00",
                "teamA": "5.20",
                "teamB": "15.80"
            },
            {
                "timer": "90:00+05:30",
                "teamA": "5.20",
                "teamB": "9.80"
            },
            {
                "timer": "90:00+06:00",
                "teamA": "5.20",
                "teamB": "5.80"
            }
        ],
        "referee": null,
        "stadium": {
            "id": "15336450c747de7e",
            "name": "Manoel Dantas Barretto"
        }
    },
    {
        "id": "65b7b92a8bf821ad",
        "date": "2022-03-04 00:30:00",
        "status": "ENDED",
        "timer": "90:00",
        "championship": {
            "id": "de7ff4c51897da24",
            "name": "Copa Libertadores",
            "s_name": null
        },
        "teamA": {
            "id": "b94c5486a8015873",
            "name": "Atletico Nacional Medellin",
            "score": {
                "f": "1",
                "1h": "0",
                "2h": "1",
                "o": null,
                "p": null
            },
            "stats": {
                "possession": "53",
                "attacks": {
                    "n": "77",
                    "d": "74",
                    "o_s": null
                },
                "shoots": {
                    "t": "12",
                    "off": "9",
                    "on": "3",
                    "g_a": "9"
                },
                "penalties": "0",
                "corners": {
                    "t": "7",
                    "f": "7",
                    "h": "2"
                },
                "fouls": {
                    "t": "10",
                    "y_c": "6",
                    "y_t_r_c": "0",
                    "r_c": "1"
                },
                "substitutions": "4",
                "throwins": null,
                "injuries": "0",
                "dominance_avg_2_5": null
            },
            "manager": {
                "id": "5fb962e95713f945",
                "name": "Alejandro Restrepo"
            }
        },
        "teamB": {
            "id": "3c70867314829629",
            "name": "Olimpia Asuncion",
            "score": {
                "f": "1",
                "1h": "0",
                "2h": "1",
                "o": null,
                "p": null
            },
            "stats": {
                "possession": "47",
                "attacks": {
                    "n": "73",
                    "d": "59",
                    "o_s": null
                },
                "shoots": {
                    "t": "9",
                    "off": "4",
                    "on": "5",
                    "g_a": "8"
                },
                "penalties": "0",
                "corners": {
                    "t": "6",
                    "f": "6",
                    "h": "1"
                },
                "fouls": {
                    "t": "9",
                    "y_c": "2",
                    "y_t_r_c": "0",
                    "r_c": "1"
                },
                "substitutions": "5",
                "throwins": null,
                "injuries": "2",
                "dominance_avg_2_5": null
            },
            "manager": {
                "id": "1a0595de57460eeb",
                "name": "Julio Caceres"
            }
        },
        "events": [
            {
                "type": "corner",
                "timer": "90+4",
                "team": "B"
            },
            {
                "type": "corner",
                "timer": "90+1",
                "team": "A"
            },
            {
                "type": "corner",
                "timer": "90",
                "team": "A"
            },
            {
                "type": "yellow_card",
                "timer": "89",
                "team": "A"
            },
            {
                "type": "yellow_card",
                "timer": "83",
                "team": "A"
            },
            {
                "type": "yellow_card",
                "timer": "76",
                "team": "A"
            },
            {
                "type": "corner",
                "timer": "75",
                "team": "B"
            },
            {
                "type": "red_card",
                "timer": "71",
                "team": "A"
            },
            {
                "type": "red_card",
                "timer": "71",
                "team": "B"
            },
            {
                "type": "yellow_card",
                "timer": "70",
                "team": "B"
            },
            {
                "type": "corner",
                "timer": "67",
                "team": "B"
            },
            {
                "type": "corner",
                "timer": "64",
                "team": "A"
            },
            {
                "type": "corner",
                "timer": "57",
                "team": "B"
            },
            {
                "type": "goal",
                "timer": "57",
                "team": "B"
            },
            {
                "type": "yellow_card",
                "timer": "57",
                "team": "A"
            },
            {
                "type": "yellow_card",
                "timer": "56",
                "team": "A"
            },
            {
                "type": "corner",
                "timer": "53",
                "team": "B"
            },
            {
                "type": "corner",
                "timer": "52",
                "team": "A"
            },
            {
                "type": "corner",
                "timer": "50",
                "team": "A"
            },
            {
                "type": "goal",
                "timer": "46",
                "team": "A"
            },
            {
                "type": "corner",
                "timer": "44",
                "team": "A"
            },
            {
                "type": "yellow_card",
                "timer": "43",
                "team": "A"
            },
            {
                "type": "yellow_card",
                "timer": "43",
                "team": "A"
            },
            {
                "type": "corner",
                "timer": "29",
                "team": "A"
            },
            {
                "type": "yellow_card",
                "timer": "23",
                "team": "B"
            },
            {
                "type": "corner",
                "timer": "8",
                "team": "B"
            }
        ],
        "dominance_index": [
            {
                "timer": "00:00",
                "teamA": "0.00",
                "teamB": "10.00"
            },
            {
                "timer": "00:30",
                "teamA": "0.00",
                "teamB": "14.00"
            },
            {
                "timer": "01:00",
                "teamA": "7.70",
                "teamB": "3.30"
            },
            {
                "timer": "01:30",
                "teamA": "12.00",
                "teamB": "3.00"
            },
            {
                "timer": "02:00",
                "teamA": "5.00",
                "teamB": "6.00"
            },
            {
                "timer": "02:30",
                "teamA": "4.60",
                "teamB": "9.40"
            },
            {
                "timer": "03:00",
                "teamA": "4.60",
                "teamB": "5.40"
            },
            {
                "timer": "03:30",
                "teamA": "10.40",
                "teamB": "4.60"
            },
            {
                "timer": "04:00",
                "teamA": "5.30",
                "teamB": "4.70"
            },
            {
                "timer": "04:30",
                "teamA": "5.30",
                "teamB": "6.70"
            },
            {
                "timer": "05:00",
                "teamA": "6.00",
                "teamB": "5.00"
            },
            {
                "timer": "05:30",
                "teamA": "5.80",
                "teamB": "10.20"
            },
            {
                "timer": "06:00",
                "teamA": "6.20",
                "teamB": "5.80"
            },
            {
                "timer": "06:30",
                "teamA": "5.20",
                "teamB": "4.80"
            },
            {
                "timer": "07:00",
                "teamA": "9.60",
                "teamB": "4.40"
            },
            {
                "timer": "07:30",
                "teamA": "5.20",
                "teamB": "8.80"
            },
            {
                "timer": "08:00",
                "teamA": "5.20",
                "teamB": "4.80"
            },
            {
                "timer": "08:30",
                "teamA": "4.80",
                "teamB": "10.20"
            },
            {
                "timer": "09:00",
                "teamA": "5.00",
                "teamB": "8.00"
            },
            {
                "timer": "09:30",
                "teamA": "9.10",
                "teamB": "4.90"
            },
            {
                "timer": "10:00",
                "teamA": "9.20",
                "teamB": "4.80"
            },
            {
                "timer": "10:30",
                "teamA": "8.50",
                "teamB": "4.50"
            },
            {
                "timer": "11:00",
                "teamA": "5.40",
                "teamB": "4.60"
            },
            {
                "timer": "11:30",
                "teamA": "6.60",
                "teamB": "5.40"
            },
            {
                "timer": "12:00",
                "teamA": "6.70",
                "teamB": "4.30"
            },
            {
                "timer": "12:30",
                "teamA": "5.70",
                "teamB": "4.30"
            },
            {
                "timer": "13:00",
                "teamA": "8.80",
                "teamB": "4.20"
            },
            {
                "timer": "13:30",
                "teamA": "9.70",
                "teamB": "4.30"
            },
            {
                "timer": "14:00",
                "teamA": "5.40",
                "teamB": "11.60"
            },
            {
                "timer": "14:30",
                "teamA": "5.30",
                "teamB": "10.70"
            },
            {
                "timer": "15:00",
                "teamA": "5.30",
                "teamB": "7.70"
            },
            {
                "timer": "15:30",
                "teamA": "6.20",
                "teamB": "4.80"
            },
            {
                "timer": "16:00",
                "teamA": "5.00",
                "teamB": "6.00"
            },
            {
                "timer": "16:30",
                "teamA": "6.00",
                "teamB": "5.00"
            },
            {
                "timer": "17:00",
                "teamA": "7.80",
                "teamB": "6.20"
            },
            {
                "timer": "17:30",
                "teamA": "4.80",
                "teamB": "8.20"
            },
            {
                "timer": "18:00",
                "teamA": "4.90",
                "teamB": "6.10"
            },
            {
                "timer": "18:30",
                "teamA": "6.10",
                "teamB": "4.90"
            },
            {
                "timer": "19:00",
                "teamA": "8.20",
                "teamB": "5.80"
            },
            {
                "timer": "19:30",
                "teamA": "11.20",
                "teamB": "4.80"
            },
            {
                "timer": "20:00",
                "teamA": "5.30",
                "teamB": "5.70"
            },
            {
                "timer": "20:30",
                "teamA": "5.20",
                "teamB": "8.80"
            },
            {
                "timer": "21:00",
                "teamA": "5.20",
                "teamB": "8.80"
            },
            {
                "timer": "21:30",
                "teamA": "6.20",
                "teamB": "4.80"
            },
            {
                "timer": "22:00",
                "teamA": "5.30",
                "teamB": "4.70"
            },
            {
                "timer": "22:30",
                "teamA": "7.30",
                "teamB": "5.70"
            },
            {
                "timer": "23:00",
                "teamA": "5.30",
                "teamB": "5.70"
            },
            {
                "timer": "23:30",
                "teamA": "5.20",
                "teamB": "4.80"
            },
            {
                "timer": "24:00",
                "teamA": "8.20",
                "teamB": "6.80"
            },
            {
                "timer": "24:30",
                "teamA": "5.20",
                "teamB": "4.80"
            },
            {
                "timer": "25:00",
                "teamA": "8.40",
                "teamB": "4.60"
            },
            {
                "timer": "25:30",
                "teamA": "5.40",
                "teamB": "4.60"
            },
            {
                "timer": "26:00",
                "teamA": "5.10",
                "teamB": "7.90"
            },
            {
                "timer": "26:30",
                "teamA": "8.20",
                "teamB": "4.80"
            },
            {
                "timer": "27:00",
                "teamA": "5.20",
                "teamB": "5.80"
            },
            {
                "timer": "27:30",
                "teamA": "6.20",
                "teamB": "5.80"
            },
            {
                "timer": "28:00",
                "teamA": "6.20",
                "teamB": "4.80"
            },
            {
                "timer": "28:30",
                "teamA": "5.30",
                "teamB": "5.70"
            },
            {
                "timer": "29:00",
                "teamA": "14.30",
                "teamB": "4.70"
            },
            {
                "timer": "29:30",
                "teamA": "5.30",
                "teamB": "4.70"
            },
            {
                "timer": "30:00",
                "teamA": "12.40",
                "teamB": "4.60"
            },
            {
                "timer": "30:30",
                "teamA": "5.40",
                "teamB": "4.60"
            },
            {
                "timer": "31:00",
                "teamA": "5.40",
                "teamB": "5.60"
            },
            {
                "timer": "31:30",
                "teamA": "9.50",
                "teamB": "4.50"
            },
            {
                "timer": "32:00",
                "teamA": "6.50",
                "teamB": "5.50"
            },
            {
                "timer": "32:30",
                "teamA": "8.40",
                "teamB": "5.60"
            },
            {
                "timer": "33:00",
                "teamA": "5.30",
                "teamB": "7.70"
            },
            {
                "timer": "33:30",
                "teamA": "8.40",
                "teamB": "4.60"
            },
            {
                "timer": "34:00",
                "teamA": "5.50",
                "teamB": "4.50"
            },
            {
                "timer": "34:30",
                "teamA": "5.40",
                "teamB": "5.60"
            },
            {
                "timer": "35:00",
                "teamA": "5.40",
                "teamB": "4.60"
            },
            {
                "timer": "35:30",
                "teamA": "5.30",
                "teamB": "6.70"
            },
            {
                "timer": "36:00",
                "teamA": "6.30",
                "teamB": "7.70"
            },
            {
                "timer": "36:30",
                "teamA": "9.40",
                "teamB": "4.60"
            },
            {
                "timer": "37:00",
                "teamA": "11.40",
                "teamB": "4.60"
            },
            {
                "timer": "37:30",
                "teamA": "5.40",
                "teamB": "7.60"
            },
            {
                "timer": "38:00",
                "teamA": "6.40",
                "teamB": "5.60"
            },
            {
                "timer": "38:30",
                "teamA": "5.40",
                "teamB": "7.60"
            },
            {
                "timer": "39:00",
                "teamA": "8.30",
                "teamB": "6.70"
            },
            {
                "timer": "39:30",
                "teamA": "9.30",
                "teamB": "5.70"
            },
            {
                "timer": "40:00",
                "teamA": "5.20",
                "teamB": "11.80"
            },
            {
                "timer": "40:30",
                "teamA": "5.20",
                "teamB": "5.80"
            },
            {
                "timer": "41:00",
                "teamA": "5.20",
                "teamB": "7.80"
            },
            {
                "timer": "41:30",
                "teamA": "5.10",
                "teamB": "12.90"
            },
            {
                "timer": "42:00",
                "teamA": "6.20",
                "teamB": "4.80"
            },
            {
                "timer": "42:30",
                "teamA": "5.20",
                "teamB": "4.80"
            },
            {
                "timer": "43:00",
                "teamA": "5.10",
                "teamB": "5.90"
            },
            {
                "timer": "43:30",
                "teamA": "5.10",
                "teamB": "7.90"
            },
            {
                "timer": "44:00",
                "teamA": "6.10",
                "teamB": "4.90"
            },
            {
                "timer": "44:30",
                "teamA": "16.20",
                "teamB": "4.80"
            },
            {
                "timer": "45:00",
                "teamA": "13.30",
                "teamB": "10.70"
            },
            {
                "timer": "45:00+00:00",
                "teamA": "5.20",
                "teamB": "4.80"
            },
            {
                "timer": "45:00+00:30",
                "teamA": "5.10",
                "teamB": "9.90"
            },
            {
                "timer": "45:00+01:00",
                "teamA": "5.20",
                "teamB": "4.80"
            },
            {
                "timer": "45:00+01:30",
                "teamA": "9.20",
                "teamB": "4.80"
            },
            {
                "timer": "45:00+02:00",
                "teamA": "9.30",
                "teamB": "5.70"
            },
            {
                "timer": "45:30",
                "teamA": "20.40",
                "teamB": "4.60"
            },
            {
                "timer": "46:00",
                "teamA": "5.40",
                "teamB": "4.60"
            },
            {
                "timer": "46:30",
                "teamA": "15.40",
                "teamB": "8.60"
            },
            {
                "timer": "47:00",
                "teamA": "5.30",
                "teamB": "5.70"
            },
            {
                "timer": "47:30",
                "teamA": "10.30",
                "teamB": "4.70"
            },
            {
                "timer": "48:00",
                "teamA": "9.40",
                "teamB": "5.60"
            },
            {
                "timer": "48:30",
                "teamA": "6.40",
                "teamB": "5.60"
            },
            {
                "timer": "49:00",
                "teamA": "8.40",
                "teamB": "4.60"
            },
            {
                "timer": "49:30",
                "teamA": "11.40",
                "teamB": "5.60"
            },
            {
                "timer": "50:00",
                "teamA": "8.40",
                "teamB": "4.60"
            },
            {
                "timer": "50:30",
                "teamA": "11.50",
                "teamB": "5.50"
            },
            {
                "timer": "51:00",
                "teamA": "9.50",
                "teamB": "4.50"
            },
            {
                "timer": "51:30",
                "teamA": "21.50",
                "teamB": "4.50"
            },
            {
                "timer": "52:00",
                "teamA": "6.60",
                "teamB": "4.40"
            },
            {
                "timer": "52:30",
                "teamA": "6.50",
                "teamB": "9.50"
            },
            {
                "timer": "53:00",
                "teamA": "5.50",
                "teamB": "10.50"
            },
            {
                "timer": "53:30",
                "teamA": "5.50",
                "teamB": "5.50"
            },
            {
                "timer": "54:00",
                "teamA": "10.50",
                "teamB": "4.50"
            },
            {
                "timer": "54:30",
                "teamA": "9.50",
                "teamB": "4.50"
            },
            {
                "timer": "55:00",
                "teamA": "5.50",
                "teamB": "11.50"
            },
            {
                "timer": "55:30",
                "teamA": "5.50",
                "teamB": "4.50"
            },
            {
                "timer": "56:00",
                "teamA": "5.50",
                "teamB": "5.50"
            },
            {
                "timer": "56:30",
                "teamA": "5.40",
                "teamB": "12.60"
            },
            {
                "timer": "57:00",
                "teamA": "5.40",
                "teamB": "17.60"
            },
            {
                "timer": "57:30",
                "teamA": "5.40",
                "teamB": "4.60"
            },
            {
                "timer": "58:00",
                "teamA": "5.40",
                "teamB": "4.60"
            },
            {
                "timer": "58:30",
                "teamA": "9.40",
                "teamB": "4.60"
            },
            {
                "timer": "59:00",
                "teamA": "5.40",
                "teamB": "4.60"
            },
            {
                "timer": "59:30",
                "teamA": "5.40",
                "teamB": "4.60"
            },
            {
                "timer": "60:00",
                "teamA": "5.40",
                "teamB": "4.60"
            },
            {
                "timer": "60:30",
                "teamA": "9.40",
                "teamB": "5.60"
            },
            {
                "timer": "61:00",
                "teamA": "5.40",
                "teamB": "4.60"
            },
            {
                "timer": "61:30",
                "teamA": "9.50",
                "teamB": "5.50"
            },
            {
                "timer": "62:00",
                "teamA": "13.50",
                "teamB": "4.50"
            },
            {
                "timer": "62:30",
                "teamA": "9.50",
                "teamB": "4.50"
            },
            {
                "timer": "63:00",
                "teamA": "5.50",
                "teamB": "5.50"
            },
            {
                "timer": "63:30",
                "teamA": "5.50",
                "teamB": "11.50"
            },
            {
                "timer": "64:00",
                "teamA": "14.60",
                "teamB": "4.40"
            },
            {
                "timer": "64:30",
                "teamA": "8.50",
                "teamB": "4.50"
            },
            {
                "timer": "65:00",
                "teamA": "5.50",
                "teamB": "5.50"
            },
            {
                "timer": "65:30",
                "teamA": "5.50",
                "teamB": "4.50"
            },
            {
                "timer": "66:00",
                "teamA": "6.50",
                "teamB": "4.50"
            },
            {
                "timer": "66:30",
                "teamA": "5.50",
                "teamB": "13.50"
            },
            {
                "timer": "67:00",
                "teamA": "5.50",
                "teamB": "11.50"
            },
            {
                "timer": "67:30",
                "teamA": "5.50",
                "teamB": "4.50"
            },
            {
                "timer": "68:00",
                "teamA": "10.50",
                "teamB": "4.50"
            },
            {
                "timer": "68:30",
                "teamA": "5.50",
                "teamB": "8.50"
            },
            {
                "timer": "69:00",
                "teamA": "6.50",
                "teamB": "8.50"
            },
            {
                "timer": "69:30",
                "teamA": "5.50",
                "teamB": "8.50"
            },
            {
                "timer": "70:00",
                "teamA": "6.40",
                "teamB": "4.60"
            },
            {
                "timer": "70:30",
                "teamA": "5.40",
                "teamB": "4.60"
            },
            {
                "timer": "71:00",
                "teamA": "5.40",
                "teamB": "4.60"
            },
            {
                "timer": "71:30",
                "teamA": "5.30",
                "teamB": "4.70"
            },
            {
                "timer": "72:00",
                "teamA": "8.40",
                "teamB": "4.60"
            },
            {
                "timer": "72:30",
                "teamA": "5.40",
                "teamB": "4.60"
            },
            {
                "timer": "73:00",
                "teamA": "8.40",
                "teamB": "5.60"
            },
            {
                "timer": "73:30",
                "teamA": "6.30",
                "teamB": "10.70"
            },
            {
                "timer": "74:00",
                "teamA": "5.30",
                "teamB": "4.70"
            },
            {
                "timer": "74:30",
                "teamA": "5.30",
                "teamB": "16.70"
            },
            {
                "timer": "75:00",
                "teamA": "5.30",
                "teamB": "7.70"
            },
            {
                "timer": "75:30",
                "teamA": "5.30",
                "teamB": "5.70"
            },
            {
                "timer": "76:00",
                "teamA": "5.20",
                "teamB": "4.80"
            },
            {
                "timer": "76:30",
                "teamA": "5.20",
                "teamB": "7.80"
            },
            {
                "timer": "77:00",
                "teamA": "5.20",
                "teamB": "8.80"
            },
            {
                "timer": "77:30",
                "teamA": "9.20",
                "teamB": "4.80"
            },
            {
                "timer": "78:00",
                "teamA": "6.20",
                "teamB": "5.80"
            },
            {
                "timer": "78:30",
                "teamA": "8.20",
                "teamB": "4.80"
            },
            {
                "timer": "79:00",
                "teamA": "9.30",
                "teamB": "4.70"
            },
            {
                "timer": "79:30",
                "teamA": "5.30",
                "teamB": "7.70"
            },
            {
                "timer": "80:00",
                "teamA": "6.30",
                "teamB": "5.70"
            },
            {
                "timer": "80:30",
                "teamA": "6.30",
                "teamB": "8.70"
            },
            {
                "timer": "81:00",
                "teamA": "8.30",
                "teamB": "4.70"
            },
            {
                "timer": "81:30",
                "teamA": "5.30",
                "teamB": "4.70"
            },
            {
                "timer": "82:00",
                "teamA": "5.30",
                "teamB": "4.70"
            },
            {
                "timer": "82:30",
                "teamA": "5.20",
                "teamB": "8.80"
            },
            {
                "timer": "83:00",
                "teamA": "8.20",
                "teamB": "4.80"
            },
            {
                "timer": "83:30",
                "teamA": "8.30",
                "teamB": "4.70"
            },
            {
                "timer": "84:00",
                "teamA": "5.20",
                "teamB": "8.80"
            },
            {
                "timer": "84:30",
                "teamA": "5.20",
                "teamB": "11.80"
            },
            {
                "timer": "85:00",
                "teamA": "6.20",
                "teamB": "8.80"
            },
            {
                "timer": "85:30",
                "teamA": "5.20",
                "teamB": "4.80"
            },
            {
                "timer": "86:00",
                "teamA": "10.30",
                "teamB": "4.70"
            },
            {
                "timer": "86:30",
                "teamA": "9.30",
                "teamB": "4.70"
            },
            {
                "timer": "87:00",
                "teamA": "5.30",
                "teamB": "4.70"
            },
            {
                "timer": "87:30",
                "teamA": "5.30",
                "teamB": "4.70"
            },
            {
                "timer": "88:00",
                "teamA": "5.30",
                "teamB": "4.70"
            },
            {
                "timer": "88:30",
                "teamA": "5.30",
                "teamB": "4.70"
            },
            {
                "timer": "89:00",
                "teamA": "5.20",
                "teamB": "4.80"
            },
            {
                "timer": "89:30",
                "teamA": "16.30",
                "teamB": "4.70"
            },
            {
                "timer": "90:00",
                "teamA": "5.20",
                "teamB": "8.80"
            },
            {
                "timer": "90:00+00:00",
                "teamA": "5.20",
                "teamB": "4.80"
            },
            {
                "timer": "90:00+00:30",
                "teamA": "13.20",
                "teamB": "8.80"
            },
            {
                "timer": "90:00+01:00",
                "teamA": "12.30",
                "teamB": "4.70"
            },
            {
                "timer": "90:00+01:30",
                "teamA": "8.30",
                "teamB": "5.70"
            },
            {
                "timer": "90:00+02:00",
                "teamA": "6.30",
                "teamB": "4.70"
            },
            {
                "timer": "90:00+02:30",
                "teamA": "8.30",
                "teamB": "4.70"
            },
            {
                "timer": "90:00+03:00",
                "teamA": "10.30",
                "teamB": "7.70"
            },
            {
                "timer": "90:00+03:30",
                "teamA": "5.30",
                "teamB": "9.70"
            },
            {
                "timer": "90:00+04:00",
                "teamA": "6.30",
                "teamB": "8.70"
            },
            {
                "timer": "90:00+04:30",
                "teamA": "9.30",
                "teamB": "4.70"
            },
            {
                "timer": "90:00+05:00",
                "teamA": "5.30",
                "teamB": "4.70"
            },
            {
                "timer": "90:00+05:30",
                "teamA": "8.40",
                "teamB": "4.60"
            },
            {
                "timer": "90:00+06:00",
                "teamA": "8.30",
                "teamB": "4.70"
            },
            {
                "timer": "96:00",
                "teamA": "",
                "teamB": ""
            }
        ],
        "referee": {
            "id": "c981e605e5ed3d55",
            "name": "Patricio Loustau"
        },
        "stadium": {
            "id": "43f3c9e0c666e4e3",
            "name": "Estadio Atanasio Girardot"
        }
    },
    {
        "id": "352336de7003eb3e",
        "date": "2022-03-04 00:30:00",
        "status": "ENDED",
        "timer": "90:00",
        "championship": {
            "id": "3ba90aa17a307ae4",
            "name": "Argentina Liga Profesional",
            "s_name": "Copa de la Liga 2022"
        },
        "teamA": {
            "id": "697d738579216920",
            "name": "Central Cordoba",
            "score": {
                "f": "0",
                "1h": "0",
                "2h": "0",
                "o": null,
                "p": null
            },
            "stats": {
                "possession": "49",
                "attacks": {
                    "n": "90",
                    "d": "80",
                    "o_s": null
                },
                "shoots": {
                    "t": "12",
                    "off": "9",
                    "on": "3",
                    "g_a": null
                },
                "penalties": "0",
                "corners": {
                    "t": "3",
                    "f": "3",
                    "h": "1"
                },
                "fouls": {
                    "t": null,
                    "y_c": "3",
                    "y_t_r_c": null,
                    "r_c": "0"
                },
                "substitutions": "5",
                "throwins": null,
                "injuries": null,
                "dominance_avg_2_5": null
            },
            "manager": {
                "id": "5fb962e7ead7662e",
                "name": "Sergio Rondina"
            }
        },
        "teamB": {
            "id": "8e1cf3f89b2faab0",
            "name": "Rosario Central",
            "score": {
                "f": "1",
                "1h": "0",
                "2h": "1",
                "o": null,
                "p": null
            },
            "stats": {
                "possession": "51",
                "attacks": {
                    "n": "95",
                    "d": "96",
                    "o_s": null
                },
                "shoots": {
                    "t": "12",
                    "off": "7",
                    "on": "5",
                    "g_a": null
                },
                "penalties": "1",
                "corners": {
                    "t": "7",
                    "f": "7",
                    "h": "5"
                },
                "fouls": {
                    "t": null,
                    "y_c": "4",
                    "y_t_r_c": null,
                    "r_c": "0"
                },
                "substitutions": "4",
                "throwins": null,
                "injuries": null,
                "dominance_avg_2_5": null
            },
            "manager": {
                "id": "5fb962ea39f36d9d",
                "name": "Cristian Kily Gonzalez"
            }
        },
        "events": [
            {
                "type": "yellow_card",
                "timer": "90+6",
                "team": "B"
            },
            {
                "type": "yellow_card",
                "timer": "90+6",
                "team": "B"
            },
            {
                "type": "penalty_miss",
                "timer": "90+5",
                "team": "B"
            },
            {
                "type": "yellow_card",
                "timer": "90+2",
                "team": "A"
            },
            {
                "type": "red_card",
                "timer": "81",
                "team": "B"
            },
            {
                "type": "yellow_card",
                "timer": "80",
                "team": "B"
            },
            {
                "type": "corner",
                "timer": "74",
                "team": "A"
            },
            {
                "type": "yellow_card",
                "timer": "73",
                "team": "A"
            },
            {
                "type": "corner",
                "timer": "72",
                "team": "A"
            },
            {
                "type": "goal",
                "timer": "67",
                "team": "B"
            },
            {
                "type": "corner",
                "timer": "56",
                "team": "B"
            },
            {
                "type": "corner",
                "timer": "50",
                "team": "B"
            },
            {
                "type": "corner",
                "timer": "45+2",
                "team": "B"
            },
            {
                "type": "yellow_card",
                "timer": "44",
                "team": "A"
            },
            {
                "type": "corner",
                "timer": "40",
                "team": "B"
            },
            {
                "type": "corner",
                "timer": "30",
                "team": "A"
            },
            {
                "type": "yellow_card",
                "timer": "30",
                "team": "B"
            },
            {
                "type": "corner",
                "timer": "15",
                "team": "B"
            },
            {
                "type": "corner",
                "timer": "7",
                "team": "B"
            },
            {
                "type": "corner",
                "timer": "3",
                "team": "B"
            }
        ],
        "dominance_index": [
            {
                "timer": "00:00",
                "teamA": "5.00",
                "teamB": "5.00"
            },
            {
                "timer": "00:30",
                "teamA": "0.40",
                "teamB": "9.60"
            },
            {
                "timer": "01:00",
                "teamA": "1.60",
                "teamB": "14.40"
            },
            {
                "timer": "01:30",
                "teamA": "3.60",
                "teamB": "15.40"
            },
            {
                "timer": "02:00",
                "teamA": "4.30",
                "teamB": "10.70"
            },
            {
                "timer": "02:30",
                "teamA": "7.00",
                "teamB": "16.00"
            },
            {
                "timer": "03:00",
                "teamA": "3.00",
                "teamB": "9.00"
            },
            {
                "timer": "03:30",
                "teamA": "8.00",
                "teamB": "9.00"
            },
            {
                "timer": "04:00",
                "teamA": "3.30",
                "teamB": "13.70"
            },
            {
                "timer": "04:30",
                "teamA": "7.50",
                "teamB": "10.50"
            },
            {
                "timer": "05:00",
                "teamA": "12.10",
                "teamB": "6.90"
            },
            {
                "timer": "05:30",
                "teamA": "3.60",
                "teamB": "11.40"
            },
            {
                "timer": "06:00",
                "teamA": "4.80",
                "teamB": "6.20"
            },
            {
                "timer": "06:30",
                "teamA": "3.50",
                "teamB": "13.50"
            },
            {
                "timer": "07:00",
                "teamA": "3.70",
                "teamB": "13.30"
            },
            {
                "timer": "07:30",
                "teamA": "3.50",
                "teamB": "12.50"
            },
            {
                "timer": "08:00",
                "teamA": "3.30",
                "teamB": "11.70"
            },
            {
                "timer": "08:30",
                "teamA": "3.30",
                "teamB": "18.70"
            },
            {
                "timer": "09:00",
                "teamA": "6.10",
                "teamB": "6.90"
            },
            {
                "timer": "09:30",
                "teamA": "2.90",
                "teamB": "9.10"
            },
            {
                "timer": "10:00",
                "teamA": "2.90",
                "teamB": "14.10"
            },
            {
                "timer": "10:30",
                "teamA": "7.30",
                "teamB": "9.70"
            },
            {
                "timer": "11:00",
                "teamA": "6.30",
                "teamB": "6.70"
            },
            {
                "timer": "11:30",
                "teamA": "3.30",
                "teamB": "6.70"
            },
            {
                "timer": "12:00",
                "teamA": "6.40",
                "teamB": "7.60"
            },
            {
                "timer": "12:30",
                "teamA": "7.50",
                "teamB": "6.50"
            },
            {
                "timer": "13:00",
                "teamA": "3.60",
                "teamB": "11.40"
            },
            {
                "timer": "13:30",
                "teamA": "4.40",
                "teamB": "6.60"
            },
            {
                "timer": "14:00",
                "teamA": "3.30",
                "teamB": "11.70"
            },
            {
                "timer": "14:30",
                "teamA": "3.20",
                "teamB": "13.80"
            },
            {
                "timer": "15:00",
                "teamA": "3.20",
                "teamB": "11.80"
            },
            {
                "timer": "15:30",
                "teamA": "7.30",
                "teamB": "11.70"
            },
            {
                "timer": "16:00",
                "teamA": "3.20",
                "teamB": "10.80"
            },
            {
                "timer": "16:30",
                "teamA": "11.40",
                "teamB": "6.60"
            },
            {
                "timer": "17:00",
                "teamA": "4.50",
                "teamB": "10.50"
            },
            {
                "timer": "17:30",
                "teamA": "4.60",
                "teamB": "6.40"
            },
            {
                "timer": "18:00",
                "teamA": "12.80",
                "teamB": "7.20"
            },
            {
                "timer": "18:30",
                "teamA": "4.90",
                "teamB": "6.10"
            },
            {
                "timer": "19:00",
                "teamA": "3.80",
                "teamB": "10.20"
            },
            {
                "timer": "19:30",
                "teamA": "4.90",
                "teamB": "11.10"
            },
            {
                "timer": "20:00",
                "teamA": "3.90",
                "teamB": "6.10"
            },
            {
                "timer": "20:30",
                "teamA": "3.90",
                "teamB": "6.10"
            },
            {
                "timer": "21:00",
                "teamA": "3.90",
                "teamB": "9.10"
            },
            {
                "timer": "21:30",
                "teamA": "5.10",
                "teamB": "5.90"
            },
            {
                "timer": "22:00",
                "teamA": "7.10",
                "teamB": "5.90"
            },
            {
                "timer": "22:30",
                "teamA": "3.90",
                "teamB": "13.10"
            },
            {
                "timer": "23:00",
                "teamA": "4.00",
                "teamB": "6.00"
            },
            {
                "timer": "23:30",
                "teamA": "5.00",
                "teamB": "6.00"
            },
            {
                "timer": "24:00",
                "teamA": "5.10",
                "teamB": "6.90"
            },
            {
                "timer": "24:30",
                "teamA": "4.10",
                "teamB": "8.90"
            },
            {
                "timer": "25:00",
                "teamA": "13.30",
                "teamB": "5.70"
            },
            {
                "timer": "25:30",
                "teamA": "11.30",
                "teamB": "5.70"
            },
            {
                "timer": "26:00",
                "teamA": "5.40",
                "teamB": "5.60"
            },
            {
                "timer": "26:30",
                "teamA": "8.40",
                "teamB": "5.60"
            },
            {
                "timer": "27:00",
                "teamA": "4.40",
                "teamB": "5.60"
            },
            {
                "timer": "27:30",
                "teamA": "9.50",
                "teamB": "6.50"
            },
            {
                "timer": "28:00",
                "teamA": "10.50",
                "teamB": "7.50"
            },
            {
                "timer": "28:30",
                "teamA": "10.60",
                "teamB": "5.40"
            },
            {
                "timer": "29:00",
                "teamA": "14.60",
                "teamB": "5.40"
            },
            {
                "timer": "29:30",
                "teamA": "9.70",
                "teamB": "9.30"
            },
            {
                "timer": "30:00",
                "teamA": "8.70",
                "teamB": "6.30"
            },
            {
                "timer": "30:30",
                "teamA": "7.70",
                "teamB": "5.30"
            },
            {
                "timer": "31:00",
                "teamA": "4.60",
                "teamB": "9.40"
            },
            {
                "timer": "31:30",
                "teamA": "4.60",
                "teamB": "6.40"
            },
            {
                "timer": "32:00",
                "teamA": "6.70",
                "teamB": "5.30"
            },
            {
                "timer": "32:30",
                "teamA": "8.70",
                "teamB": "5.30"
            },
            {
                "timer": "33:00",
                "teamA": "4.70",
                "teamB": "5.30"
            },
            {
                "timer": "33:30",
                "teamA": "4.70",
                "teamB": "8.30"
            },
            {
                "timer": "34:00",
                "teamA": "5.70",
                "teamB": "5.30"
            },
            {
                "timer": "34:30",
                "teamA": "4.80",
                "teamB": "6.20"
            },
            {
                "timer": "35:00",
                "teamA": "4.80",
                "teamB": "10.20"
            },
            {
                "timer": "35:30",
                "teamA": "7.80",
                "teamB": "5.20"
            },
            {
                "timer": "36:00",
                "teamA": "6.70",
                "teamB": "14.30"
            },
            {
                "timer": "36:30",
                "teamA": "4.70",
                "teamB": "6.30"
            },
            {
                "timer": "37:00",
                "teamA": "7.70",
                "teamB": "5.30"
            },
            {
                "timer": "37:30",
                "teamA": "4.60",
                "teamB": "6.40"
            },
            {
                "timer": "38:00",
                "teamA": "4.60",
                "teamB": "10.40"
            },
            {
                "timer": "38:30",
                "teamA": "8.70",
                "teamB": "8.30"
            },
            {
                "timer": "39:00",
                "teamA": "7.60",
                "teamB": "7.40"
            },
            {
                "timer": "39:30",
                "teamA": "4.50",
                "teamB": "8.50"
            },
            {
                "timer": "40:00",
                "teamA": "5.50",
                "teamB": "9.50"
            },
            {
                "timer": "40:30",
                "teamA": "5.50",
                "teamB": "13.50"
            },
            {
                "timer": "41:00",
                "teamA": "4.40",
                "teamB": "14.60"
            },
            {
                "timer": "41:30",
                "teamA": "4.40",
                "teamB": "12.60"
            },
            {
                "timer": "42:00",
                "teamA": "11.50",
                "teamB": "5.50"
            },
            {
                "timer": "42:30",
                "teamA": "4.50",
                "teamB": "5.50"
            },
            {
                "timer": "43:00",
                "teamA": "4.50",
                "teamB": "5.50"
            },
            {
                "timer": "43:30",
                "teamA": "4.50",
                "teamB": "5.50"
            },
            {
                "timer": "44:00",
                "teamA": "4.50",
                "teamB": "5.50"
            },
            {
                "timer": "44:30",
                "teamA": "4.50",
                "teamB": "9.50"
            },
            {
                "timer": "45:00",
                "teamA": "10.60",
                "teamB": "8.40"
            },
            {
                "timer": "45:00+00:00",
                "teamA": "4.60",
                "teamB": "5.40"
            },
            {
                "timer": "45:00+00:30",
                "teamA": "4.50",
                "teamB": "5.50"
            },
            {
                "timer": "45:00+01:00",
                "teamA": "4.50",
                "teamB": "12.50"
            },
            {
                "timer": "45:30",
                "teamA": "5.50",
                "teamB": "11.50"
            },
            {
                "timer": "46:00",
                "teamA": "7.50",
                "teamB": "5.50"
            },
            {
                "timer": "46:30",
                "teamA": "5.60",
                "teamB": "8.40"
            },
            {
                "timer": "47:00",
                "teamA": "9.60",
                "teamB": "8.40"
            },
            {
                "timer": "47:30",
                "teamA": "4.60",
                "teamB": "8.40"
            },
            {
                "timer": "48:00",
                "teamA": "7.50",
                "teamB": "5.50"
            },
            {
                "timer": "48:30",
                "teamA": "6.60",
                "teamB": "5.40"
            },
            {
                "timer": "49:00",
                "teamA": "7.60",
                "teamB": "8.40"
            },
            {
                "timer": "49:30",
                "teamA": "4.60",
                "teamB": "9.40"
            },
            {
                "timer": "50:00",
                "teamA": "4.60",
                "teamB": "16.40"
            },
            {
                "timer": "50:30",
                "teamA": "10.60",
                "teamB": "9.40"
            },
            {
                "timer": "51:00",
                "teamA": "4.60",
                "teamB": "5.40"
            },
            {
                "timer": "51:30",
                "teamA": "4.50",
                "teamB": "12.50"
            },
            {
                "timer": "52:00",
                "teamA": "8.50",
                "teamB": "5.50"
            },
            {
                "timer": "52:30",
                "teamA": "4.50",
                "teamB": "6.50"
            },
            {
                "timer": "53:00",
                "teamA": "10.60",
                "teamB": "8.40"
            },
            {
                "timer": "53:30",
                "teamA": "4.50",
                "teamB": "10.50"
            },
            {
                "timer": "54:00",
                "teamA": "7.60",
                "teamB": "5.40"
            },
            {
                "timer": "54:30",
                "teamA": "4.60",
                "teamB": "5.40"
            },
            {
                "timer": "55:00",
                "teamA": "8.60",
                "teamB": "8.40"
            },
            {
                "timer": "55:30",
                "teamA": "7.60",
                "teamB": "5.40"
            },
            {
                "timer": "56:00",
                "teamA": "4.60",
                "teamB": "12.40"
            },
            {
                "timer": "56:30",
                "teamA": "4.50",
                "teamB": "10.50"
            },
            {
                "timer": "57:00",
                "teamA": "5.60",
                "teamB": "5.40"
            },
            {
                "timer": "57:30",
                "teamA": "7.60",
                "teamB": "6.40"
            },
            {
                "timer": "58:00",
                "teamA": "4.50",
                "teamB": "13.50"
            },
            {
                "timer": "58:30",
                "teamA": "4.60",
                "teamB": "8.40"
            },
            {
                "timer": "59:00",
                "teamA": "16.60",
                "teamB": "6.40"
            },
            {
                "timer": "59:30",
                "teamA": "8.50",
                "teamB": "7.50"
            },
            {
                "timer": "60:00",
                "teamA": "4.50",
                "teamB": "8.50"
            },
            {
                "timer": "60:30",
                "teamA": "5.50",
                "teamB": "6.50"
            },
            {
                "timer": "61:00",
                "teamA": "5.50",
                "teamB": "7.50"
            },
            {
                "timer": "61:30",
                "teamA": "4.50",
                "teamB": "9.50"
            },
            {
                "timer": "62:00",
                "teamA": "7.40",
                "teamB": "9.60"
            },
            {
                "timer": "62:30",
                "teamA": "12.50",
                "teamB": "5.50"
            },
            {
                "timer": "63:00",
                "teamA": "5.50",
                "teamB": "5.50"
            },
            {
                "timer": "63:30",
                "teamA": "9.60",
                "teamB": "5.40"
            },
            {
                "timer": "64:00",
                "teamA": "4.60",
                "teamB": "8.40"
            },
            {
                "timer": "64:30",
                "teamA": "4.50",
                "teamB": "8.50"
            },
            {
                "timer": "65:00",
                "teamA": "4.50",
                "teamB": "18.50"
            },
            {
                "timer": "65:30",
                "teamA": "4.50",
                "teamB": "11.50"
            },
            {
                "timer": "66:00",
                "teamA": "4.50",
                "teamB": "5.50"
            },
            {
                "timer": "66:30",
                "teamA": "4.50",
                "teamB": "18.50"
            },
            {
                "timer": "67:00",
                "teamA": "4.50",
                "teamB": "5.50"
            },
            {
                "timer": "67:30",
                "teamA": "4.50",
                "teamB": "5.50"
            },
            {
                "timer": "68:00",
                "teamA": "5.60",
                "teamB": "5.40"
            },
            {
                "timer": "68:30",
                "teamA": "5.60",
                "teamB": "5.40"
            },
            {
                "timer": "69:00",
                "teamA": "8.60",
                "teamB": "5.40"
            },
            {
                "timer": "69:30",
                "teamA": "9.70",
                "teamB": "6.30"
            },
            {
                "timer": "70:00",
                "teamA": "4.60",
                "teamB": "5.40"
            },
            {
                "timer": "70:30",
                "teamA": "4.60",
                "teamB": "5.40"
            },
            {
                "timer": "71:00",
                "teamA": "4.60",
                "teamB": "6.40"
            },
            {
                "timer": "71:30",
                "teamA": "16.60",
                "teamB": "6.40"
            },
            {
                "timer": "72:00",
                "teamA": "13.70",
                "teamB": "5.30"
            },
            {
                "timer": "72:30",
                "teamA": "6.70",
                "teamB": "5.30"
            },
            {
                "timer": "73:00",
                "teamA": "4.70",
                "teamB": "5.30"
            },
            {
                "timer": "73:30",
                "teamA": "10.70",
                "teamB": "5.30"
            },
            {
                "timer": "74:00",
                "teamA": "14.80",
                "teamB": "5.20"
            },
            {
                "timer": "74:30",
                "teamA": "4.80",
                "teamB": "6.20"
            },
            {
                "timer": "75:00",
                "teamA": "4.80",
                "teamB": "5.20"
            },
            {
                "timer": "75:30",
                "teamA": "4.80",
                "teamB": "5.20"
            },
            {
                "timer": "76:00",
                "teamA": "4.80",
                "teamB": "5.20"
            },
            {
                "timer": "76:30",
                "teamA": "8.80",
                "teamB": "5.20"
            },
            {
                "timer": "77:00",
                "teamA": "4.80",
                "teamB": "5.20"
            },
            {
                "timer": "77:30",
                "teamA": "4.80",
                "teamB": "5.20"
            },
            {
                "timer": "78:00",
                "teamA": "5.80",
                "teamB": "8.20"
            },
            {
                "timer": "78:30",
                "teamA": "8.90",
                "teamB": "8.10"
            },
            {
                "timer": "79:00",
                "teamA": "5.90",
                "teamB": "5.10"
            },
            {
                "timer": "79:30",
                "teamA": "10.90",
                "teamB": "5.10"
            },
            {
                "timer": "80:00",
                "teamA": "4.90",
                "teamB": "5.10"
            },
            {
                "timer": "80:30",
                "teamA": "4.90",
                "teamB": "5.10"
            },
            {
                "timer": "81:00",
                "teamA": "4.90",
                "teamB": "5.10"
            },
            {
                "timer": "81:30",
                "teamA": "4.90",
                "teamB": "5.10"
            },
            {
                "timer": "82:00",
                "teamA": "10.90",
                "teamB": "5.10"
            },
            {
                "timer": "82:30",
                "teamA": "5.90",
                "teamB": "5.10"
            },
            {
                "timer": "83:00",
                "teamA": "4.90",
                "teamB": "5.10"
            },
            {
                "timer": "83:30",
                "teamA": "8.00",
                "teamB": "5.00"
            },
            {
                "timer": "84:00",
                "teamA": "4.90",
                "teamB": "5.10"
            },
            {
                "timer": "84:30",
                "teamA": "4.90",
                "teamB": "5.10"
            },
            {
                "timer": "85:00",
                "teamA": "7.90",
                "teamB": "5.10"
            },
            {
                "timer": "85:30",
                "teamA": "8.90",
                "teamB": "5.10"
            },
            {
                "timer": "86:00",
                "teamA": "4.90",
                "teamB": "5.10"
            },
            {
                "timer": "86:30",
                "teamA": "5.90",
                "teamB": "8.10"
            },
            {
                "timer": "87:00",
                "teamA": "4.90",
                "teamB": "5.10"
            },
            {
                "timer": "87:30",
                "teamA": "4.90",
                "teamB": "7.10"
            },
            {
                "timer": "88:00",
                "teamA": "5.90",
                "teamB": "12.10"
            },
            {
                "timer": "88:30",
                "teamA": "4.90",
                "teamB": "11.10"
            },
            {
                "timer": "89:00",
                "teamA": "4.80",
                "teamB": "11.20"
            },
            {
                "timer": "89:30",
                "teamA": "4.80",
                "teamB": "8.20"
            },
            {
                "timer": "90:00",
                "teamA": "",
                "teamB": ""
            },
            {
                "timer": "90:00+00:00",
                "teamA": "10.90",
                "teamB": "5.10"
            },
            {
                "timer": "90:00+00:30",
                "teamA": "4.90",
                "teamB": "5.10"
            },
            {
                "timer": "90:00+01:00",
                "teamA": "8.90",
                "teamB": "7.10"
            },
            {
                "timer": "90:00+01:30",
                "teamA": "7.90",
                "teamB": "5.10"
            },
            {
                "timer": "90:00+02:00",
                "teamA": "4.90",
                "teamB": "5.10"
            },
            {
                "timer": "90:00+02:30",
                "teamA": "4.90",
                "teamB": "5.10"
            },
            {
                "timer": "90:00+03:00",
                "teamA": "4.90",
                "teamB": "6.10"
            },
            {
                "timer": "90:00+03:30",
                "teamA": "4.90",
                "teamB": "9.10"
            },
            {
                "timer": "90:00+04:00",
                "teamA": "4.90",
                "teamB": "10.10"
            },
            {
                "timer": "90:00+04:30",
                "teamA": "4.90",
                "teamB": "5.10"
            },
            {
                "timer": "90:00+05:00",
                "teamA": "4.90",
                "teamB": "6.10"
            },
            {
                "timer": "90:00+05:30",
                "teamA": "4.90",
                "teamB": "9.10"
            },
            {
                "timer": "90:00+06:00",
                "teamA": "4.90",
                "teamB": "5.10"
            },
            {
                "timer": "90:00+06:30",
                "teamA": "7.90",
                "teamB": "5.10"
            }
        ],
        "referee": {
            "id": "b6c804a496335e65",
            "name": "Silvio Trucco"
        },
        "stadium": {
            "id": "412d108bd300cdad",
            "name": "Estadio Alfredo Terrera"
        }
    }
  ]
}