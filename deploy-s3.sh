#!/bin/sh

aws s3 rm s3://t-kawamura.com/ --recursive
aws s3 cp dist s3://t-kawamura.com/ --recursive
