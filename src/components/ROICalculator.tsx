import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calculator, TrendingUp } from 'lucide-react';

const ROICalculator = () => {
  const [values, setValues] = useState({
    emailsSent: 10000,
    currentOpenRate: 15,
    currentClickRate: 2,
    averageOrderValue: 150,
    emailCost: 500
  });

  const [showResults, setShowResults] = useState(false);

  // Calculate improved metrics with iEMA
  const improvedOpenRate = values.currentOpenRate * 1.6; // 60% improvement
  const improvedClickRate = values.currentClickRate * 2.2; // 120% improvement
  
  // Current performance
  const currentOpens = (values.emailsSent * values.currentOpenRate) / 100;
  const currentClicks = (values.emailsSent * values.currentClickRate) / 100;
  const currentRevenue = currentClicks * values.averageOrderValue;
  const currentROI = ((currentRevenue - values.emailCost) / values.emailCost) * 100;

  // Improved performance with iEMA
  const improvedOpens = (values.emailsSent * improvedOpenRate) / 100;
  const improvedClicks = (values.emailsSent * improvedClickRate) / 100;
  const improvedRevenue = improvedClicks * values.averageOrderValue;
  const iemaMonthlyFee = 79; // Professional plan
  const improvedROI = ((improvedRevenue - values.emailCost - iemaMonthlyFee) / (values.emailCost + iemaMonthlyFee)) * 100;
  
  const additionalRevenue = improvedRevenue - currentRevenue;
  const roiImprovement = improvedROI - currentROI;

  const handleCalculate = () => {
    setShowResults(true);
  };

  return (
    <section className="section-padding bg-gradient-secondary">
      <div className="container-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto">
              <Calculator className="h-8 w-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Calculate Your
              <span className="block text-gradient">Potential ROI</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              See how much revenue you could generate with iEMA's email automation platform
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="card-gradient border-0">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Your Current Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="emailsSent">Emails Sent per Month</Label>
                  <Input
                    id="emailsSent"
                    type="number"
                    value={values.emailsSent}
                    onChange={(e) => setValues({...values, emailsSent: parseInt(e.target.value) || 0})}
                    className="text-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="openRate">Current Open Rate (%)</Label>
                  <Input
                    id="openRate"
                    type="number"
                    value={values.currentOpenRate}
                    onChange={(e) => setValues({...values, currentOpenRate: parseFloat(e.target.value) || 0})}
                    className="text-lg"
                    step="0.1"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="clickRate">Current Click Rate (%)</Label>
                  <Input
                    id="clickRate"
                    type="number"
                    value={values.currentClickRate}
                    onChange={(e) => setValues({...values, currentClickRate: parseFloat(e.target.value) || 0})}
                    className="text-lg"
                    step="0.1"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="orderValue">Average Order Value ($)</Label>
                  <Input
                    id="orderValue"
                    type="number"
                    value={values.averageOrderValue}
                    onChange={(e) => setValues({...values, averageOrderValue: parseFloat(e.target.value) || 0})}
                    className="text-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="emailCost">Current Monthly Email Cost ($)</Label>
                  <Input
                    id="emailCost"
                    type="number"
                    value={values.emailCost}
                    onChange={(e) => setValues({...values, emailCost: parseFloat(e.target.value) || 0})}
                    className="text-lg"
                  />
                </div>

                <Button onClick={handleCalculate} className="btn-hero w-full text-lg">
                  Calculate ROI Potential
                  <TrendingUp className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            {showResults && (
              <Card className="card-primary border-0 animate-bounce-in">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary-foreground">
                    Your Potential with iEMA
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-primary-foreground">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-primary-foreground/10 rounded-lg">
                      <div className="text-2xl font-bold">{improvedOpenRate.toFixed(1)}%</div>
                      <div className="text-sm opacity-80">Open Rate</div>
                      <div className="text-xs text-green-300">↑{((improvedOpenRate - values.currentOpenRate) / values.currentOpenRate * 100).toFixed(0)}%</div>
                    </div>
                    <div className="text-center p-4 bg-primary-foreground/10 rounded-lg">
                      <div className="text-2xl font-bold">{improvedClickRate.toFixed(1)}%</div>
                      <div className="text-sm opacity-80">Click Rate</div>
                      <div className="text-xs text-green-300">↑{((improvedClickRate - values.currentClickRate) / values.currentClickRate * 100).toFixed(0)}%</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-primary-foreground/10 rounded-lg">
                      <span>Additional Monthly Revenue</span>
                      <span className="text-2xl font-bold text-green-300">
                        ${additionalRevenue.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-primary-foreground/10 rounded-lg">
                      <span>ROI Improvement</span>
                      <span className="text-2xl font-bold text-green-300">
                        +{roiImprovement.toFixed(0)}%
                      </span>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-primary-foreground/10 rounded-lg">
                      <span>Annual Additional Revenue</span>
                      <span className="text-2xl font-bold text-yellow-300">
                        ${(additionalRevenue * 12).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    <p className="text-sm opacity-80 mb-4">
                      Based on average improvements seen by our customers
                    </p>
                    <Button 
                      size="lg" 
                      className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full"
                    >
                      Start Your Free Trial Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;