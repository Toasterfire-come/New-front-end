import requests
import sys
from datetime import datetime
import json

class BackendAPITester:
    def __init__(self, base_url="https://stockscan-wp-theme.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"Response: {json.dumps(response_data, indent=2)}")
                except:
                    print(f"Response: {response.text[:200]}...")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"Response: {response.text[:200]}...")

            return success, response.json() if success and response.text else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_root_endpoint(self):
        """Test root API endpoint"""
        success, response = self.run_test(
            "Root API Endpoint",
            "GET",
            "api/",
            200
        )
        return success

    def test_create_status_check(self, client_name):
        """Create a status check"""
        success, response = self.run_test(
            "Create Status Check",
            "POST",
            "api/status",
            200,  # Based on the backend code, it should return 200, not 201
            data={"client_name": client_name}
        )
        return response.get('id') if success else None

    def test_get_status_checks(self):
        """Get all status checks"""
        success, response = self.run_test(
            "Get Status Checks",
            "GET",
            "api/status",
            200
        )
        return success, response

def main():
    # Setup
    tester = BackendAPITester()
    test_client = f"test_client_{datetime.now().strftime('%H%M%S')}"

    print("🚀 Starting Backend API Tests...")
    print(f"Base URL: {tester.base_url}")

    # Test 1: Root endpoint
    if not tester.test_root_endpoint():
        print("❌ Root endpoint failed")

    # Test 2: Create status check
    status_id = tester.test_create_status_check(test_client)
    if not status_id:
        print("❌ Status check creation failed")

    # Test 3: Get status checks
    success, status_checks = tester.test_get_status_checks()
    if success:
        print(f"✅ Retrieved {len(status_checks) if isinstance(status_checks, list) else 'unknown'} status checks")
    else:
        print("❌ Status check retrieval failed")

    # Print results
    print(f"\n📊 Backend Tests Summary:")
    print(f"Tests passed: {tester.tests_passed}/{tester.tests_run}")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All backend tests passed!")
        return 0
    else:
        print("⚠️  Some backend tests failed")
        return 1

if __name__ == "__main__":
    sys.exit(main())