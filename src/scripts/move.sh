DIR=$1
SUB_DIR=$2

for file in ./src/app/$DIR/$SUB_DIR/*
do
  # mv $file "${file}/pages"

  filename=$(basename -- "$file")
  extension="${filename##*.}"
  filename="${filename%.*}"

  [[ $filename != "page" ]] && mkdir ./src/app/$DIR/$SUB_DIR/$filename && mv ./src/app/$DIR/$SUB_DIR/$filename.tsx ./src/app/$DIR/$SUB_DIR/$filename/page.tsx
done