"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Geolocation = require("nativescript-geolocation");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(zone) {
        this.zone = zone;
        this.latitude = 0;
        this.longitude = 0;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.getDeviceLocation = function () {
        return new Promise(function (resolve, reject) {
            Geolocation.enableLocationRequest().then(function () {
                Geolocation.getCurrentLocation({ timeout: 10000 }).then(function (location) {
                    resolve(location);
                }).catch(function (error) {
                    reject(error);
                });
            });
        });
    };
    HomeComponent.prototype.updateLocation = function () {
        var _this = this;
        this.getDeviceLocation().then(function (result) {
            _this.latitude = result.latitude;
            _this.longitude = result.longitude;
        }, function (error) {
            console.error(error);
        });
    };
    HomeComponent.prototype.startWatchingLocation = function () {
        var _this = this;
        this.watchId = Geolocation.watchLocation(function (location) {
            if (location) {
                _this.zone.run(function () {
                    _this.latitude = location.latitude;
                    _this.longitude = location.longitude;
                    console.log(_this.latitude);
                    console.log(_this.longitude);
                });
            }
        }, function (error) {
            console.error(error);
        }, { updateDistance: 1, minimumUpdateTime: 1000 });
    };
    HomeComponent.prototype.stopWatchingLocation = function () {
        if (this.watchId) {
            Geolocation.clearWatch(this.watchId);
            this.watchId = null;
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUUxRCxzREFBd0Q7QUFPeEQ7SUFNSSx1QkFBMkIsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7UUFFbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFHQSxDQUFDO0lBR08seUNBQWlCLEdBQXpCO1FBQ0ksTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDL0IsV0FBVyxDQUFDLHFCQUFxQixFQUFFLENBQUMsSUFBSSxDQUFDO2dCQUNyQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRO29CQUMxRCxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEtBQUs7b0JBQ1YsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNsQixDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sc0NBQWMsR0FBckI7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07WUFDaEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUN0QyxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSw2Q0FBcUIsR0FBNUI7UUFBQSxpQkFjQztRQWJHLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLGFBQWEsQ0FBQyxVQUFBLFFBQVE7WUFDN0MsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDVixLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztvQkFDVixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7b0JBQ2xDLEtBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztvQkFFcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNoQyxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUM7UUFDTCxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixDQUFDLEVBQUUsRUFBRSxjQUFjLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVNLDRDQUFvQixHQUEzQjtRQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2QsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDeEIsQ0FBQztJQUNMLENBQUM7SUE1RFEsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FPbUMsYUFBTTtPQU45QixhQUFhLENBNkR6QjtJQUFELG9CQUFDO0NBQUEsQUE3REQsSUE2REM7QUE3RFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCAqIGFzIEdlb2xvY2F0aW9uIGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBsb25naXR1ZGU6IGFueTtcclxuICAgIGxhdGl0dWRlOiBhbnk7XHJcbiAgICB3YXRjaElkOiBhbnk7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogTmdab25lKSB7XHJcblxyXG4gICAgICAgIHRoaXMubGF0aXR1ZGUgPSAwO1xyXG4gICAgICAgIHRoaXMubG9uZ2l0dWRlID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgZ2V0RGV2aWNlTG9jYXRpb24oKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBHZW9sb2NhdGlvbi5lbmFibGVMb2NhdGlvblJlcXVlc3QoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIEdlb2xvY2F0aW9uLmdldEN1cnJlbnRMb2NhdGlvbih7dGltZW91dDogMTAwMDB9KS50aGVuKGxvY2F0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGxvY2F0aW9uKTtcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVMb2NhdGlvbigpIHtcclxuICAgICAgICB0aGlzLmdldERldmljZUxvY2F0aW9uKCkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxhdGl0dWRlID0gcmVzdWx0LmxhdGl0dWRlO1xyXG4gICAgICAgICAgICB0aGlzLmxvbmdpdHVkZSA9IHJlc3VsdC5sb25naXR1ZGU7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnRXYXRjaGluZ0xvY2F0aW9uKCkge1xyXG4gICAgICAgIHRoaXMud2F0Y2hJZCA9IEdlb2xvY2F0aW9uLndhdGNoTG9jYXRpb24obG9jYXRpb24gPT4ge1xyXG4gICAgICAgICAgICBpZihsb2NhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXRpdHVkZSA9IGxvY2F0aW9uLmxhdGl0dWRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9uZ2l0dWRlID0gbG9jYXRpb24ubG9uZ2l0dWRlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGF0aXR1ZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubG9uZ2l0dWRlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9LCB7IHVwZGF0ZURpc3RhbmNlOiAxLCBtaW5pbXVtVXBkYXRlVGltZTogMTAwMCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RvcFdhdGNoaW5nTG9jYXRpb24oKSB7XHJcbiAgICAgICAgaWYodGhpcy53YXRjaElkKSB7XHJcbiAgICAgICAgICAgIEdlb2xvY2F0aW9uLmNsZWFyV2F0Y2godGhpcy53YXRjaElkKTtcclxuICAgICAgICAgICAgdGhpcy53YXRjaElkID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19