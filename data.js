var APP_DATA = {
  "scenes": [
    {
      "id": "0-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.026344292089660826,
        "pitch": -0.17967520905098056,
        "fov": 1.5482613641673215
      },
      "linkHotspots": [
        {
          "yaw": -3.0835986324382443,
          "pitch": -0.19222738916027104,
          "rotation": 3.141592653589793,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.801962994979533,
          "pitch": -0.29746574629341715,
          "title": "Coffee Place",
          "text": "Never been here before but damn I should. I only know about the huggs coffee that opened"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.35763364342969517,
        "pitch": -0.2117730958663291,
        "fov": 1.5482613641673215
      },
      "linkHotspots": [
        {
          "yaw": 0.09158371833123802,
          "pitch": 0.11457192923228732,
          "rotation": 0,
          "target": "0-engineering-auditorium-atrium"
        },
        {
          "yaw": -1.8403494904026232,
          "pitch": 0.14403445303570805,
          "rotation": 0,
          "target": "2-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1185344698522854,
          "pitch": -0.711782459280375,
          "title": "Tall Sculpture",
          "text": "My bf will say \"I too wish\""
        }
      ]
    },
    {
      "id": "2-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.13297746681861433,
        "pitch": -0.11156189091539304,
        "fov": 1.5482613641673215
      },
      "linkHotspots": [
        {
          "yaw": -0.8156006957476762,
          "pitch": 0.1965642175734459,
          "rotation": 0,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.17808246251827242,
          "pitch": 0.3533414817630476,
          "title": "Engineering",
          "text": "My bf's fac which he's probably been to like twice"
        }
      ]
    }
  ],
  "name": "Engine",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
