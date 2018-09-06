#!/bin/bash
printf '[{"pipeline_name":"%s", "pipeline_step": "post_build"}]' $PIPELINE_NAME > tmp/post_build.json
