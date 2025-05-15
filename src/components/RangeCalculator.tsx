'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from '@/lib/translations';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

export function RangeCalculator() {
  const t = useTranslations();
  const [batteryLevel, setBatteryLevel] = useState(100);
  const [temperature, setTemperature] = useState(20);
  const [speed, setSpeed] = useState(60);
  const [terrain, setTerrain] = useState('flat');
  const [calculatedRange, setCalculatedRange] = useState<number | null>(null);

  const calculateRange = () => {
    // Базалық қашықтық (WLTC бойынша)
    let baseRange = 500;

    // Батарея зарядының әсері
    const batteryFactor = batteryLevel / 100;

    // Температураның әсері
    const tempFactor = temperature < 0 ? 0.7 : temperature > 30 ? 0.8 : 1;

    // Жылдамдықтың әсері
    const speedFactor = speed < 50 ? 1.2 : speed > 100 ? 0.7 : 1;

    // Жер бедерінің әсері
    const terrainFactor = {
      flat: 1,
      hilly: 0.8,
      mountainous: 0.6
    }[terrain];

    // Жалпы қашықтықты есептеу
    const range = Math.round(baseRange * batteryFactor * tempFactor * speedFactor * terrainFactor);

    setCalculatedRange(range);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto"
    >
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-2">{t('calculator.title')}</h2>
        <p className="text-gray-600 mb-6">{t('calculator.subtitle')}</p>

        <div className="space-y-4">
          <div>
            <Label htmlFor="battery">{t('calculator.battery')}</Label>
            <Input
              id="battery"
              type="number"
              min="0"
              max="100"
              value={batteryLevel}
              onChange={(e) => setBatteryLevel(Number(e.target.value))}
            />
          </div>

          <div>
            <Label htmlFor="temperature">{t('calculator.temperature')}</Label>
            <Input
              id="temperature"
              type="number"
              value={temperature}
              onChange={(e) => setTemperature(Number(e.target.value))}
            />
          </div>

          <div>
            <Label htmlFor="speed">{t('calculator.speed')}</Label>
            <Input
              id="speed"
              type="number"
              min="0"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
            />
          </div>

          <div>
            <Label htmlFor="terrain">{t('calculator.terrain')}</Label>
            <Select value={terrain} onValueChange={setTerrain}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="flat">{t('calculator.flat')}</SelectItem>
                <SelectItem value="hilly">{t('calculator.hilly')}</SelectItem>
                <SelectItem value="mountainous">{t('calculator.mountainous')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button onClick={calculateRange} className="w-full">
            {t('calculator.calculate')}
          </Button>

          {calculatedRange !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 p-4 bg-gray-50 rounded-lg text-center"
            >
              <h3 className="text-lg font-semibold mb-2">{t('calculator.result')}</h3>
              <p className="text-3xl font-bold text-primary">
                {calculatedRange} {t('calculator.range')}
              </p>
              <p className="text-sm text-gray-500 mt-2">{t('calculator.disclaimer')}</p>
            </motion.div>
          )}
        </div>
      </Card>
    </motion.div>
  );
} 