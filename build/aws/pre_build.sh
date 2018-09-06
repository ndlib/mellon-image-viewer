#!/bin/bash
mkdir tmp
printf '[{"pipeline_name":"%s", "pipeline_step": "pre_build"}]' $PIPELINE_NAME > tmp/pre_build.json
