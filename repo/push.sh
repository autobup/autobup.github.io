#!/bin/bash
dpkg-scanpackages ./Files/ > Packages
bzip2 -fks Packages
