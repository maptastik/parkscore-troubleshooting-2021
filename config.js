const config = {
    layers: {
        prcrParks:{
            displayName: "PRCR\'s Raleigh Parks for ParkServe - 2021",
            data: {
                path: "raleigh_parks_list_update_20210205.geojson",
                attribution: "City of Raleigh Parks, Recreation and Cultural Resources GIS"
            },
            popupTemplate: {
                title: "PRCR Inventory: {Park Name}",
                content: [
                  {
                    type: "fields",
                    fieldInfos: [
                      {
                        fieldName: "Managing A",
                        label: "Park Manager"
                      }
                    ]
                  }
                ]
              },
            renderer: {
                type: "simple",
                symbol: createSymbol("#1B5E20")
              }
        },
        tplParks: {
            displayName: "TPL\'s Raleigh Parks for ParkServe - 2021",
            data: {
                path: "https://hosted.tplgis.org/hosted/rest/services/ParkServe/ParkServe_ProdWeb/FeatureServer/2",
                attribution: "Trust for Public Land",
                definitionExpression: "Park_Local_Manager LIKE '%Raleigh%'"
            },
            popupTemplate: {
                title: "TPL Inventory: {Park_Name}",
                content: [
                  {
                    type: "fields",
                    fieldInfos: [
                      {
                        fieldName: "Park_Local_Owner",
                        label: "Park Owner"
                      },
                      {
                        fieldName: "Park_Local_Manager",
                        label: "Park Manager"
                      },
                      {
                        fieldName: "Park_Source_Agency",
                        label: "Source Agency"
                      }
                    ]
                  }
                ]
              },
              renderer: {
                type: "unique-value",
                valueExpression: `IIF(Upper($feature["Park_Local_Manager"]) =='RALEIGH CITY OF', 'CITY OF RALEIGH', Upper($feature["Park_Local_Manager"]))`,
                valueExpressionTitle: "Park Manager According to TPL Data",
                defaultSymbol: createSymbol([158,158,158,1]),
                uniqueValueInfos: [
                  {
                    value: "CITY OF RALEIGH",
                    symbol: createSymbol("#4CAF50")
                  },
                  {
                    value: "BENTLEY & ASSOCIATES",
                    symbol: createSymbol("#90CAF9")
                  },
                  {
                    value: "NORTH CAROLINA STATE OF",
                    symbol: {
                      type: "simple-fill",
                      color: createSymbol([255,213,79,1])
                    }
                  },
                  {
                    value: "WAKE COUNTY",
                    symbol: createSymbol("#CE93D8")
                  }
                ]
              }
        },
        raleighCityLimits: {
            displayName: "Raleigh City Limits",
            data: {
                path: "https://maps.wakegov.com/arcgis/rest/services/Jurisdictions/Jurisdictions/MapServer/0",
                attribution: "Wake County GIS",
                definitionExpression: "LONG_NAME='RALEIGH'"
            },
            renderer:  {
                type: "simple",
                symbol: createSymbol("#BDBDBD", 0)
              }
        }
    }
}

function createSymbol(color, outlineWidth = 0.2) {
    return {
      type: "simple-fill", // autocasts as new SimpleFillSymbol()
      color: color,
      outline: {
        width: outlineWidth,
        color: [0, 0, 0, 0.1]
      }
    }
  }

export default config