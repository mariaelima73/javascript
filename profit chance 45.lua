-- Profit of 45% of chance

basebet = 0.001 -- balance/100.000
chance = 45
bethigh = true


function dobet()
    if (win) then
        nextbet = basebet
    else
        nextbet = previousbet + (previousbet * 0.75)
    end

    if (wins%10 == 0) then
        bethigh = !bethigh
    end
    if (losses%15 == 0) then
        bethigh = !bethigh
    end

    if profit >= 1 then
        stop()
    end