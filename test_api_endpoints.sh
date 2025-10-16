#!/bin/bash

# OctoFit Tracker API Endpoint Test Script
# This script tests all API endpoints to ensure they're working correctly

BASE_URL="https://${CODESPACE_NAME}-8000.app.github.dev"

echo "Testing OctoFit Tracker API Endpoints"
echo "Base URL: $BASE_URL"
echo ""

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Test counter
PASS=0
FAIL=0

# Function to test endpoint
test_endpoint() {
    local endpoint=$1
    local name=$2
    
    echo -n "Testing $name endpoint... "
    
    # Make request and get status code
    status=$(curl -s -o /dev/null -w "%{http_code}" "${BASE_URL}/api/${endpoint}/")
    
    # Check if status is 200
    if [ "$status" = "200" ]; then
        echo -e "${GREEN}✅ PASS${NC} (Status: $status)"
        ((PASS++))
        return 0
    else
        echo -e "${RED}❌ FAIL${NC} (Status: $status)"
        ((FAIL++))
        return 1
    fi
}

# Test all endpoints
test_endpoint "activities" "Activities"
test_endpoint "teams" "Teams"
test_endpoint "users" "Users"
test_endpoint "leaderboard" "Leaderboard"
test_endpoint "workouts" "Workouts"

echo ""
echo "========================================="
echo "Results: $PASS passed, $FAIL failed"
echo "========================================="

# Exit with appropriate code
if [ $FAIL -gt 0 ]; then
    exit 1
else
    exit 0
fi
