#!/bin/bash
# Just reuse the yarn build that we do locally
sh ./build/local/build.sh

# Output necessary info from the build stage to use as input for the post_build stage
printf '[{"pipeline_name":"%s", "pipeline_step": "build"}]' $PIPELINE_NAME > tmp/build.json
