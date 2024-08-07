#!/bin/bash

PAGES_HTML_FILE="./src/data/PAGES_HTML.json"

update_json() {
    local json_path=("$@")
    local file_path="${json_path[-1]}"
    unset 'json_path[-1]'

    echo "Updating JSON with file: $file_path"
    node ./src/scripts/update_json.js "$file_path" "${json_path[@]}"
}

traverse_directory() {
    local dir_path=$1
    shift
    local json_path=("$@")

    for item in "$dir_path"/*; do
        if [[ -d $item ]]; then
            local new_json_path=("${json_path[@]}" "$(basename "$item")")
            traverse_directory "$item" "${new_json_path[@]}"
        elif [[ -f $item && $item == *.js ]]; then
            local file_name=$(basename "$item" .js)
            local new_json_path=("${json_path[@]}" "$file_name" "$item")
            update_json "${new_json_path[@]}"
        fi
    done
}

root_directory="./src/pages"
json_root_path=()

traverse_directory "$root_directory" "${json_root_path[@]}"

echo "PAGES_HTML.json has been updated successfully!"
