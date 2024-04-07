import json
from pathlib import Path

file_path = Path("./openapi.json")
openapi_content = json.loads(file_path.read_text())

for path_data in openapi_content["paths"].values():
    for operation in path_data.values():
        feature_name = operation["tags"][0]
        operation_id = operation["operationId"]
        new_operation_id = feature_name
        operation["operationId"] = "".join([ word.capitalize() for word in new_operation_id.split(" ")])

file_path.write_text(json.dumps(openapi_content))